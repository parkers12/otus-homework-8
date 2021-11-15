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
  function launchSlider(bullit, back = false) {
    if (back) {
      getPrevSlide(getNumberActive(items), items, bullit, "");
    } else {
      getNextSlide(getNumberActive(items), items, bullit, "");
    }
    launcher = setTimeout(launchSlider, config.slideChangeInterval, bullit);
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
      if (getNumberActive(items) < idTargetSlide) {
        getNextSlide(
          getNumberActive(items),
          items,
          sliderBullit,
          idTargetSlide
        );
      } else {
        getPrevSlide(
          getNumberActive(items),
          items,
          sliderBullit,
          idTargetSlide
        );
      }
      // sliderBullit = document.getElementById(config.sliderBullit);
      // const itemsBullit = [...sliderBullit.querySelectorAll("div")];
      // setTimeout(
      //     delPrevClass,
      //     config.slideAnimationTime * 1000 + 100,
      //     items,
      //     getNumberActive(items),
      //     itemsBullit
      // );
    }
  };
}
