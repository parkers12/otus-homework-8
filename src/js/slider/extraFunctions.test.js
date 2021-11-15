import {
  classDelete,
  addClassesActive,
  getBullitActive,
} from "./extraFunctions";

import config from "./config";

const activeSldCls = config.activeSlideClass;
const prevSldCls = config.prevSlideClass;
const nextSldCls = config.nextSlideClass;
const sliderBullitId = config.sliderBullit;

describe("extraFunctions", () => {
  afterAll(() => {
    document.body.innerHTML = "";
  });

  const slider = document.createElement("div");
  document.body.appendChild(slider).setAttribute("class", "slider");
  slider.innerHTML = `<ul id=${config.sliderId}>
            <li class='slider__list-item'><b>1</b></li>
            <li class='slider__list-item'><b>2</b></li>
            <li class='slider__list-item'><b>3</b></li>
            <li class='slider__list-item'><b>4</b></li>
            <li class='slider__list-item'><b>5</b></li>
        </ul>`;
  const sliderList = document.getElementById(config.sliderId);

  const bullitElem = document.createElement("div");
  const bullitList = slider.parentNode.appendChild(bullitElem);
  bullitList.setAttribute("id", sliderBullitId);
  bullitList.setAttribute("class", "slider__bullit-list");

  for (let i = 0; i < 5; i += 1) {
    const bullitItem = document.createElement("div");
    bullitList.appendChild(bullitItem);
    const item = `bullit-${i}`;
    bullitItem.setAttribute("id", item);
    bullitItem.setAttribute("class", "slider__bullit-list-item");
  }

  const bullitItem = document.createElement("div");
  bullitList.appendChild(bullitItem);
  bullitItem.setAttribute("class", "slider__bullit-list-item_active");

  describe("getBullitActive", () => {
    const bullitActive = 2;
    const sliderBullit = document.getElementById(config.sliderBullit);
    const bullitsList = document.getElementById(sliderBullitId);
    const bullitItems = [...bullitsList.querySelectorAll("div")];
    bullitItems[5].setAttribute("style", "left: -3px");

    it("show bullets if there are more than 1 slides", () => {
      let position = -3;
      for (let i = 0; i < bullitActive; i += 1) {
        position += 28;
      }
      const stringPos = `left: ${position}px`;
      getBullitActive(sliderBullit, bullitActive);
      const style = bullitItems[5].getAttribute("style");
      expect(stringPos).toBe(style);
    });
  });

  describe("classDelete", () => {
    const activeItem = 2;
    const itemsToggle = [...sliderList.querySelectorAll("li")];
    const classesPrev = `${activeSldCls} ${prevSldCls}`.split(" ");
    const classesNext = `${activeSldCls} ${nextSldCls}`.split(" ");

    const classesAll = `${activeSldCls} ${prevSldCls} ${nextSldCls}`.split(" ");

    itemsToggle[activeItem].classList.add(...classesPrev);

    it("show next slide", () => {
      const nextElem = activeItem + 1;
      itemsToggle[nextElem].classList.add(...classesNext);
      const classesDel = `${prevSldCls} ${nextSldCls}`.split(" ");
      classDelete(classesAll, classesDel, activeItem, nextElem, itemsToggle);
      const isClassActive =
        itemsToggle[nextElem].classList.contains(activeSldCls);
      expect(isClassActive).toEqual(true);
    });

    it("show previous slide", () => {
      const nextElem = activeItem - 1;
      itemsToggle[nextElem].classList.add(...classesNext);
      const classesDel = `${prevSldCls} ${nextSldCls}`.split(" ");
      classDelete(classesAll, classesDel, activeItem, nextElem, itemsToggle);
      const isClassActive =
        itemsToggle[nextElem].classList.contains(activeSldCls);
      expect(isClassActive).toEqual(true);
    });

    it("show previous slide", () => {
      const nextElem = activeItem - 1;
      itemsToggle[nextElem].classList.add(...classesNext);
      classDelete(classesAll, nextSldCls, activeItem, nextElem, itemsToggle);
      const isClassActive =
        itemsToggle[nextElem].classList.contains(activeSldCls);
      expect(isClassActive).toEqual(true);
    });
  });

  describe("addClassesActive", () => {
    const prevItem = 2;
    const nextItem = 3;
    const itemsClassesActive = [...sliderList.querySelectorAll("li")];
    itemsClassesActive[prevItem].classList.add(activeSldCls);
    itemsClassesActive[prevItem].classList.remove(prevSldCls);

    it("first slide is active", () => {
      const classesAdd = `${activeSldCls} ${nextSldCls}`.split(" ");
      const classes = `${activeSldCls} ${prevSldCls}`.split(" ");

      addClassesActive(
        prevItem,
        nextItem,
        classesAdd,
        classes,
        itemsClassesActive
      );

      const isClassPrev =
        itemsClassesActive[prevItem].classList.contains(prevSldCls);
      const isClassNext =
        itemsClassesActive[nextItem].classList.contains(nextSldCls);
      const isClassPrevActive =
        itemsClassesActive[prevItem].classList.contains(activeSldCls);
      const isClassNextActive =
        itemsClassesActive[nextItem].classList.contains(activeSldCls);

      const isClasses =
        isClassPrev && isClassNext && isClassPrevActive && isClassNextActive;
      expect(isClasses).toBe(true);
    });
  });
});
