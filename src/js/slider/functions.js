import {
  addClassesActive,
  classDelete,
  getBullitActive,
} from "./extraFunctions";

import config from "./config";

const activeSldCls = config.activeSlideClass;
const prevSldCls = config.prevSlideClass;
const nextSldCls = config.nextSlideClass;
const backBltCls = config.backBullitClass;
const sliderBullitId = config.sliderBullit;

export function getArraySlides(slider) {
  const items = [...slider.querySelectorAll("li")];
  return items;
}

export function addFirstSldActive(firstItem) {
  return firstItem.classList.add(activeSldCls);
}

export function getNumberActive(arr) {
  let actElem = -1;
  for (let i = 0; i < arr.length; i += 1) {
    const elem = arr[i].className;
    if (elem !== "" && elem.indexOf(activeSldCls) > 0) {
      actElem = i;
      break;
    }
  }
  return actElem;
}

export function getNextSlide(
  numderActiveSlide,
  arr,
  sliderBullit,
  targetSlide
) {
  let nextElem;

  if (numderActiveSlide === arr.length - 1 && targetSlide === "") {
    nextElem = 0;
  } else if (targetSlide === "") {
    nextElem = numderActiveSlide + 1;
  } else {
    nextElem = targetSlide;
  }

  const numAct = getNumberActive(arr);
  const currentItem = arr[numAct];
  if (
    !currentItem.classList.contains(config.nextSlideClass) &&
    !currentItem.classList.contains(config.prevSlideClass)
  ) {
    const classesAdd = `${activeSldCls} ${nextSldCls}`.split(" ");
    const classes = `${activeSldCls} ${prevSldCls}`.split(" ");

    addClassesActive(numderActiveSlide, nextElem, classesAdd, classes, arr);

    const classesAll = `${activeSldCls} ${prevSldCls} ${nextSldCls}`.split(" ");

    setTimeout(
      classDelete,
      config.slideAnimationTime * 1000 + 100,
      classesAll,
      nextSldCls,
      arr[numderActiveSlide],
      nextElem,
      arr
    );

    if (sliderBullit) {
      getBullitActive(sliderBullit, nextElem);
    }
    return true;
  }
  return false;
}

export function getPrevSlide(
  numderActiveSlide,
  arr,
  sliderBullit,
  targetSlide
) {
  let nextElem;

  if (numderActiveSlide === 0 && targetSlide === "") {
    nextElem = arr.length - 1;
  } else if (targetSlide === "") {
    nextElem = numderActiveSlide - 1;
  } else {
    nextElem = targetSlide;
  }

  const currentItem = arr[getNumberActive(arr)];
  if (
    !currentItem.classList.contains(config.nextSlideClass) &&
    !currentItem.classList.contains(config.prevSlideClass)
  ) {
    const classesAdd = `${activeSldCls} ${nextSldCls} ${backBltCls}`.split(" ");
    const classes = `${backBltCls} ${prevSldCls}`.split(" ");

    addClassesActive(numderActiveSlide, nextElem, classesAdd, classes, arr);

    const classesAll =
      `${activeSldCls} ${prevSldCls} ${nextSldCls} ${backBltCls}`.split(" ");
    const classesDel = `${prevSldCls} ${nextSldCls} ${backBltCls}`.split(" ");
    setTimeout(
      classDelete,
      config.slideAnimationTime * 1000 + 100,
      classesAll,
      classesDel,
      arr[numderActiveSlide],
      nextElem,
      arr
    );

    if (sliderBullit) {
      getBullitActive(sliderBullit, nextElem);
    }
    return true;
  }
  return false;
}

export function getBullitList(num, slider) {
  const bullitElem = document.createElement("div");
  const bullitList = slider.parentNode.appendChild(bullitElem);
  bullitList.setAttribute("id", sliderBullitId);
  bullitList.setAttribute("class", "slider__bullit-list");

  if (num > 1) {
    for (let i = 0; i < num; i += 1) {
      const bullitItem = document.createElement("div");
      bullitList.appendChild(bullitItem);
      const item = `bullit-${i}`;
      bullitItem.setAttribute("id", item);
      bullitItem.setAttribute("class", "slider__bullit-list-item");
    }

    const bullitItem = document.createElement("div");
    bullitList.appendChild(bullitItem);
    bullitItem.setAttribute("class", "slider__bullit-list-item_active");
  }
}
