import config from "./config";
import { sliderJS } from "./slider";
import { launchSlider } from "./launcher";
import {
  getArraySlides,
  addFirstSlideActive,
  getBullitList,
} from "./functions";

jest.mock("./launcher", () => {
  const originalModule = jest.requireActual("./launcher");
  return {
    __esModule: true,
    ...originalModule,
    launchSlider: jest.fn().mockImplementation(() => true),
  };
});

jest.mock("./functions", () => {
  const originalModule = jest.requireActual("./functions");
  return {
    __esModule: true,
    ...originalModule,
    getArraySlides: jest.fn(),
    addFirstSlideActive: jest.fn(),
    getBullitList: jest.fn(),
    getNextSlide: jest.fn(),
    getPrevSlide: jest.fn(),
  };
});

describe("sliderJS", () => {
  document.body.innerHTML = "";
  const sliderContainer = document.createElement("div");
  document.body.appendChild(sliderContainer).setAttribute("class", "slider");

  describe("Test without items", () => {
    it("Get error", () => {
      sliderJS();
      expect(getArraySlides).toHaveBeenCalled();
      const erMes = document.getElementsByClassName("message");
      expect(erMes.length).toBe(1);
    });
  });

  describe("Test with items", () => {
    it("Get call functions", () => {
      sliderContainer.innerHTML = `<ul id=${config.sliderId}>
                <li class='slider__list-item'><b>1</b></li>
                <li class='slider__list-item'><b>2</b></li>
                <li class='slider__list-item'><b>3</b></li>
                <li class='slider__list-item'><b>4</b></li>
                <li class='slider__list-item'><b>5</b></li>
            </ul>
            <div id="arrows">
            <div id="arrowsLeft"></div>
            <div id="pause"></div>
            <div id="arrowsRight"></div>
            </div>
            <div id="sliderBullit">
                <div id="bullit-0"></div>
                <div id="bullit-1"></div>
                <div id="bullit-2"></div>
                <div id="bullit-3"></div>
                <div id="bullit-4"></div>
            </div>`;

      getArraySlides.mockImplementation(() => [
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
      ]);
      addFirstSlideActive.mockImplementation(() => [
        "li.slider__list-item.active",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
      ]);

      sliderJS();
      expect(getArraySlides).toHaveBeenCalled();
      expect(addFirstSlideActive).toHaveBeenCalled();
      expect(getBullitList).toHaveBeenCalled();
      setTimeout(() => {
        expect(launchSlider).toBe(true);
        expect(launchSlider).toHaveBeenCalled();
      }, 1000);
    });
  });
});
