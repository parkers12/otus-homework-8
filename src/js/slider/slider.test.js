import config from "./config";
import { sliderJS } from "./slider";
import { launchSlider } from "./launcher";
import { arrowHandler, bullitHandler } from "./handlers";
import { getArraySlides, addFirstSldActive, getBullitList } from "./functions";
import { errorMessage } from "./errorMessage";

jest.useFakeTimers();

jest.mock("./launcher", () => {
  const originalModule = jest.requireActual("./launcher");
  return {
    __esModule: true,
    ...originalModule,
    launchSlider: jest.fn(),
  };
});

jest.mock("./functions", () => {
  const originalModule = jest.requireActual("./functions");
  return {
    __esModule: true,
    ...originalModule,
    getArraySlides: jest.fn(),
    addFirstSldActive: jest.fn(),
    getBullitList: jest.fn(),
  };
});

jest.mock("./handlers", () => {
  const originalModule = jest.requireActual("./handlers");
  return {
    __esModule: true,
    ...originalModule,
    arrowHandler: jest.fn(),
    bullitHandler: jest.fn(),
  };
});

jest.mock("./errorMessage", () => {
  const originalModule = jest.requireActual("./errorMessage");
  return {
    __esModule: true,
    ...originalModule,
    errorMessage: jest.fn(),
  };
});

describe("sliderJS", () => {
  document.body.innerHTML = "";
  const sliderContainer = document.createElement("div");
  document.body.appendChild(sliderContainer).setAttribute("class", "slider");

  describe("Test without items", () => {
    it("Get error", () => {
      getArraySlides.mockImplementation(() => []);
      sliderJS();
      expect(errorMessage).toHaveBeenCalled();
    });
  });

  describe("Test with items", () => {
    sliderContainer.innerHTML = `<ul id=${config.sliderId}>
            <li class='slider__list-item'><b>1</b></li>
            <li class='slider__list-item'><b>2</b></li>
            <li class='slider__list-item'><b>3</b></li>
            <li class='slider__list-item'><b>4</b></li>
            <li class='slider__list-item'><b>5</b></li>
        </ul>
        <div id="arrows">
        <div id="arrowsLeft"></div>
        <div id="pause" class=""></div>
        <div id="arrowsRight"></div>
        </div>
        <div id="sliderBullit">
            <div id="bullit-0"></div>
            <div id="bullit-1"></div>
            <div id="bullit-2"></div>
            <div id="bullit-3"></div>
            <div id="bullit-4"></div>
        </div>`;

    const arrows = document.getElementById("arrows");
    const pauseBtn = document.getElementById(config.pauseSlider);

    it("Get call functions", () => {
      jest.runAllTimers();
      getArraySlides.mockImplementation(() => [
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
      ]);
      addFirstSldActive.mockImplementation(() => [
        "li.slider__list-item.active",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
        "li.slider__list-item",
      ]);
      sliderJS();
      expect(getArraySlides).toHaveBeenCalled();
      expect(addFirstSldActive).toHaveBeenCalled();
      expect(getBullitList).toHaveBeenCalled();
    });

    it("Woking starterSlider", () => {
      jest.runAllTimers();
      config.isBullit = false;
      sliderJS();
      expect(launchSlider).toHaveBeenCalled();
    });

    it("Get call functions starterSlider with arrowsLeft", () => {
      const isPauseBf = pauseBtn.classList.contains(config.stopSlider);
      arrowHandler.mockImplementation(() => "arrowsLeft");
      arrows.click();
      sliderJS();
      const isPauseAf = pauseBtn.classList.contains(config.stopSlider);
      expect(isPauseBf).toBe(false);
      expect(isPauseAf).toBe(true);
      expect(arrowHandler).toHaveBeenCalled();
      expect(launchSlider).toHaveBeenCalled();
    });

    it("Get call functions starterSlider with arrowsRight", () => {
      arrowHandler.mockImplementation(() => "arrowsRight");
      arrows.click();
      sliderJS();
      expect(launchSlider).toHaveBeenCalled();
    });

    it("Get call functions starterSlider with pause", () => {
      jest.runAllTimers();
      arrowHandler.mockImplementation(() => "pause");
      arrows.click();
      sliderJS();
      expect(launchSlider).toHaveBeenCalled();
    });

    it("Working bullits", () => {
      const bullitList = document.getElementById("sliderBullit");
      bullitList.click();
      sliderJS();
      expect(bullitHandler).toHaveBeenCalled();
    });

    it("Working bullits with error", () => {
      const bullitList = document.getElementById("sliderBullit");
      bullitList.remove();
      sliderJS();
      expect(errorMessage).toHaveBeenCalled();
    });

    it("Get call functions starterSlider with pause", () => {
      arrows.remove();
      sliderJS();
      expect(errorMessage).toHaveBeenCalled();
    });
  });
});
