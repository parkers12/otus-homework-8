import config from "./config";
import { getArraySlides, addFirstSldActive, getBullitList } from "./functions";
import { launchSlider } from "./launcher";
import { arrowHandler, bullitHandler } from "./handlers";

import { errorMessage } from "./errorMessage";

let launcher;

export function starterSlider(bullit, isBack, itemsSl, loop) {
  if (loop) {
    launcher = setTimeout(
      launchSlider,
      config.slideChangeInterval,
      bullit,
      isBack,
      itemsSl
    );
  } else {
    launchSlider(bullit, isBack, itemsSl);
  }
}

export function sliderJS() {
  const slider = document.getElementById(config.sliderId);
  const items = getArraySlides(slider);
  let sliderBullit = "";

  if (slider !== null && items.length > 0) {
    addFirstSldActive(items[0]);
    if (items.length > 1) {
      if (config.isBullit) {
        getBullitList(items.length, slider);
        sliderBullit = document.getElementById(config.sliderBullit);
        starterSlider(sliderBullit, false, items, true);
      } else {
        starterSlider(false, false, items, true);
      }
    }
  } else {
    const mes =
      "The slider ID was not found on the " +
      "page or the list of images is missing";
    errorMessage(mes);
  }

  const arrows = document.getElementById("arrows");
  if (arrows) {
    arrows.addEventListener("click", (e) => {
      clearTimeout(launcher);
      const pauseBtn = document.getElementById(config.pauseSlider);
      pauseBtn.classList.add(config.stopSlider);
      const arrButton = arrowHandler(e);
      if (arrButton === config.arrowsLeft) {
        starterSlider(sliderBullit, true, items, false);
      } else if (arrButton === config.arrowsRight) {
        starterSlider(sliderBullit, false, items, false);
      } else if (arrButton === config.pauseSlider) {
        starterSlider(sliderBullit, false, items, true);
      }
    });
  } else {
    errorMessage("Error: without arrow button");
  }

  const bullitList = document.getElementById("sliderBullit");
  if (bullitList) {
    bullitList.addEventListener("click", (e) => {
      const pauseBtn = document.getElementById(config.pauseSlider);
      pauseBtn.classList.add(config.stopSlider);
      clearTimeout(launcher);
      bullitHandler(e, items);
    });
  } else {
    errorMessage("Error: without bullit buttons");
  }
}
