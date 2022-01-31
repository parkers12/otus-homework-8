import "../styles/styles.scss";

import { mobileToggleMenu } from "./mobileToggleMenu";

import { sliderJS } from "./slider/slider";

function startFunction() {
  mobileToggleMenu();
  sliderJS();
}

document.addEventListener("DOMContentLoaded", startFunction());
