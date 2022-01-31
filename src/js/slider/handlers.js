import config from "./config";
import { getNumberActive, getNextSlide, getPrevSlide } from "./functions";
import { errorMessage } from "./errorMessage";

export function arrowHandler(e) {
  let idBtn = "";
  const button = e.target.getAttribute("id");
  if (button === config.pauseSlider) {
    const buttonElement = document.getElementById(button);
    const buttonElemClasses = buttonElement.classList;
    const isPause = buttonElement.classList.contains(config.stopSlider);
    if (isPause) {
      buttonElemClasses.remove(config.stopSlider);
      idBtn = button;
    } else {
      buttonElemClasses.add(config.stopSlider);
    }
  } else {
    idBtn = button;
  }
  return idBtn;
}

export function bullitHandler(e, items) {
  const targetSlide = e.target.getAttribute("id");
  const sliderBullit = document.getElementById(config.sliderBullit);
  const idTargetSlide = Number(targetSlide.split("-")[1]);
  const active = getNumberActive(items);
  if (active >= 0) {
    if (active < idTargetSlide) {
      getNextSlide(active, items, sliderBullit, idTargetSlide);
    } else {
      getPrevSlide(active, items, sliderBullit, idTargetSlide);
    }
  } else {
    errorMessage("Error: without active slide");
  }
}
