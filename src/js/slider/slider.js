import config from "./config";

import {
  getArraySlides,
  addFirstSlideActive,
  getNumberActive,
  getNextSlide,
  getPrevSlide,
  getBullitList,
} from "./functions";

import { launchSlider } from "./launcher";

export function sliderJS() {
  const slider = document.getElementById(config.sliderId);
  const items = getArraySlides(slider);
  console.log(items);
  let sliderBullit = "";
  let launcher;

  function starterSlider(bullit, isBack, itemsSl) {
    launchSlider(bullit, isBack, itemsSl);
  }

  if (slider !== null && items.length > 0) {
    addFirstSlideActive(items[0]);
    if (items.length > 1) {
      if (config.isBullit) {
        getBullitList(items.length, slider);
        sliderBullit = document.getElementById(config.sliderBullit);
        launcher = setTimeout(
          starterSlider,
          config.slideChangeInterval,
          sliderBullit,
          false,
          items
        );
      } else {
        launcher = setTimeout(
          starterSlider,
          config.slideChangeInterval,
          "",
          false,
          items
        );
      }
    }
  } else {
    const body = document.getElementsByTagName("body")[0];
    const messageIdNotFound = document.createElement("div");
    body.appendChild(messageIdNotFound).setAttribute("class", "message");
    messageIdNotFound.innerHTML =
      "The slider ID was not found on the " +
      "page or the list of images is missing";
  }

  const arrows = document.getElementById("arrows");
  arrows.onclick = (e) => {
    const button = e.target.getAttribute("id");
    if (button === "arrowsLeft") {
      starterSlider(sliderBullit, true, items);
      clearTimeout(launcher);
    } else if (button === "arrowsRight") {
      starterSlider(sliderBullit, false, items);
      clearTimeout(launcher);
    } else {
      const buttonElement = document.getElementById(button);
      const buttonElemSlasses = buttonElement.classList;
      const isPause = buttonElement.classList.contains(config.stopSlider);
      if (isPause) {
        buttonElemSlasses.remove(config.stopSlider);
        launcher = setTimeout(
          starterSlider,
          config.slideChangeInterval,
          sliderBullit,
          false,
          items
        );
      } else {
        buttonElemSlasses.add(config.stopSlider);
        clearTimeout(launcher);
      }
    }
  };

  const bullitList = document.getElementById("sliderBullit");
  bullitList.onclick = (e) => {
    const targetSlide = e.target.getAttribute("id");
    if (targetSlide !== "sliderBullit") {
      sliderBullit = document.getElementById(config.sliderBullit);
      const idTargetSlide = Number(targetSlide.split("-")[1]);
      clearTimeout(launcher);
      const actNum2 = getNumberActive(items);
      if (actNum2 >= 0) {
        if (actNum2 < idTargetSlide) {
          getNextSlide(actNum2, items, sliderBullit, idTargetSlide);
        } else {
          getPrevSlide(actNum2, items, sliderBullit, idTargetSlide);
        }
      } else {
        console.log("Error: without active slide");
      }
    }
  };
}
