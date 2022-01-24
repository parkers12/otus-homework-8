import config from "./config";
import {
  getArraySlides,
  addFirstSlideActive,
  getNumberActive,
  getNextSlide,
  getPrevSlide,
  getBullitList,
} from "./functions";

export function sliderJS() {
  const slider = document.getElementById(config.sliderId);
  const items = getArraySlides(slider);

  let sliderBullit = "";
  let launcher;
  function launchSlider(bullit, isBack = false) {
    const actNum = getNumberActive(items);
    if (actNum >= 0) {
      if (isBack) {
        getPrevSlide(actNum, items, bullit, "");
      } else {
        getNextSlide(actNum, items, bullit, "");
      }
      launcher = setTimeout(launchSlider, config.slideChangeInterval, bullit);
    } else {
      console.log("Error");
    }
  }

  if (slider !== null && items.length > 0) {
    addFirstSlideActive(items[0]);
    if (items.length > 1) {
      if (config.isBullit) {
        getBullitList(items.length, slider);
        sliderBullit = document.getElementById(config.sliderBullit);
        setTimeout(launchSlider, config.slideChangeInterval, sliderBullit);
      } else {
        setTimeout(launchSlider, config.slideChangeInterval, "");
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
      launchSlider(sliderBullit, true);
      clearTimeout(launcher);
    } else if (button === "arrowsRight") {
      launchSlider(sliderBullit);
      clearTimeout(launcher);
    } else {
      const buttonElement = document.getElementById(button);
      if (buttonElement.classList.indexOf("stop") > 0) {
        buttonElement.classList.remove("stop");
        launchSlider(sliderBullit);
      } else {
        buttonElement.classList.add("stop");
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
      if (actNum2 > 0) {
        if (actNum2 < idTargetSlide) {
          getNextSlide(actNum2, items, sliderBullit, idTargetSlide);
        } else {
          getPrevSlide(actNum2, items, sliderBullit, idTargetSlide);
        }
      } else {
        console.log("Error");
      }
    }
  };
}
