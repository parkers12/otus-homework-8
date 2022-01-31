import config from "./config";
import { arrowHandler, bullitHandler } from "./handlers";
import { getNumberActive, getNextSlide, getPrevSlide } from "./functions";
import { errorMessage } from "./errorMessage";

jest.mock("./functions", () => {
  const originalModule = jest.requireActual("./functions");
  return {
    __esModule: true,
    ...originalModule,
    getNumberActive: jest.fn(),
    getNextSlide: jest.fn(),
    getPrevSlide: jest.fn(),
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

describe("Handlers", () => {
  document.body.innerHTML = "";
  const sliderContainer = document.createElement("div");
  document.body.appendChild(sliderContainer).setAttribute("class", "slider");

  describe("arrowHandler", () => {
    sliderContainer.innerHTML = `
            <div id="arrows">
                <div id="arrowsLeft"></div>
                <div id="pause"></div>
                <div id="arrowsRight"></div>
            </div>`;

    it("Click left arrow", () => {
      const mEvent = {
        target: {
          getAttribute: jest.fn().mockReturnValueOnce(config.arrowsLeft),
        },
      };
      const res = arrowHandler(mEvent);
      expect(res).toBe(config.arrowsLeft);
    });

    it("Click right arrow", () => {
      const mEvent = {
        target: {
          getAttribute: jest.fn().mockReturnValueOnce(config.arrowsRight),
        },
      };
      const res = arrowHandler(mEvent);
      expect(res).toBe(config.arrowsRight);
    });

    it("Click pause button", () => {
      const mEvent = {
        target: {
          getAttribute: jest.fn().mockReturnValueOnce(config.pauseSlider),
        },
      };
      const res = arrowHandler(mEvent);
      expect(res).toBe("");
    });

    it("Click play button", () => {
      sliderContainer.innerHTML = `
                <div id="arrows">
                    <div id="arrowsLeft"></div>
                    <div id="pause" class="stop"></div>
                    <div id="arrowsRight"></div>
                </div>`;
      const mEvent = {
        target: {
          getAttribute: jest.fn().mockReturnValueOnce(config.pauseSlider),
        },
      };
      const res = arrowHandler(mEvent);
      expect(res).toBe(config.pauseSlider);
    });
  });

  describe("bullitHandler", () => {
    const items = [
      "li.slider__list-item",
      "li.slider__list-item",
      "li.slider__list-item",
      "li.slider__list-item",
      "li.slider__list-item",
    ];

    it("Without active slide", () => {
      const mEvent = {
        target: {
          getAttribute: jest.fn().mockReturnValueOnce("bullit-2"),
        },
      };
      bullitHandler(mEvent, items);
      expect(errorMessage).toHaveBeenCalled();
    });

    it("Get next slide", () => {
      sliderContainer.innerHTML = `
                <div id="sliderBullit">
                    <div id="bullit-0"></div>
                    <div id="bullit-1"></div>
                    <div id="bullit-2"></div>
                    <div id="bullit-3"></div>
                    <div id="bullit-4"></div>
                </div>`;
      items[0] = "li.slider__list-item.active";
      const mEvent = {
        target: {
          getAttribute: jest.fn().mockReturnValueOnce("bullit-2"),
        },
      };
      getNumberActive.mockImplementation(() => 0);
      bullitHandler(mEvent, items);
      expect(getNumberActive).toHaveBeenCalled();
      expect(getNextSlide).toHaveBeenCalled();
    });

    it("Get prev slide", () => {
      items[0] = "li.slider__list-item";
      items[2] = "li.slider__list-item.active";
      const mEvent = {
        target: {
          getAttribute: jest.fn().mockReturnValueOnce("bullit-0"),
        },
      };
      getNumberActive.mockImplementation(() => 2);
      bullitHandler(mEvent, items);
      expect(getNumberActive).toHaveBeenCalled();
      expect(getPrevSlide).toHaveBeenCalled();
    });
  });
});
