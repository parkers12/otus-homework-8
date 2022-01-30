import { getNumberActive, getPrevSlide, getNextSlide } from "./functions";
import { errorMessage } from "./errorMessage";

export function launchSlider(bullit, isBack, items) {
  const actNum = getNumberActive(items);
  if (actNum >= 0) {
    if (isBack) {
      getPrevSlide(actNum, items, bullit, "");
    } else {
      getNextSlide(actNum, items, bullit, "");
    }
  } else {
    errorMessage("Error: without active slide");
  }
}
