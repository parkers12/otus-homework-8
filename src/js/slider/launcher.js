import { getNumberActive, getPrevSlide, getNextSlide } from "./functions";

export function launchSlider(bullit, isBack, itemsSlider) {
  const actNum = getNumberActive(itemsSlider);
  if (actNum >= 0) {
    if (isBack) {
      getPrevSlide(actNum, itemsSlider, bullit, "");
    } else {
      getNextSlide(actNum, itemsSlider, bullit, "");
    }
  } else {
    console.log("Error: without active slide");
  }
}
