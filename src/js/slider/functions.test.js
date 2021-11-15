import {
  getArraySlides,
  addFirstSlideActive,
  getNumberActive,
  getNextSlide,
  getPrevSlide,
  getBullitList,
} from "./functions";

import * as extraFunctions from "./extraFunctions";
import config from "./config";

const activeSldCls = config.activeSlideClass;
const sliderBullitId = config.sliderBullit;

describe("addFirstSlideActive", () => {
  afterAll(() => {
    document.body.innerHTML = "";
  });

  const slider = document.createElement("div");
  document.body.appendChild(slider).setAttribute("class", "slider");
  slider.innerHTML = `<ul id=${config.sliderId}>
            <li class='slider__list-item'><b>1</b></li>
            <li class='slider__list-item'><b>2</b></li>
            <li class='slider__list-item'><b>3</b></li>
            <li class='slider__list-item'><b>4</b></li>
            <li class='slider__list-item'><b>5</b></li>
        </ul>`;
  const sliderList = document.getElementById(config.sliderId);

  describe("getArraySlides", () => {
    it("get an array with slides", () => {
      expect(getArraySlides(sliderList)).toHaveLength(5);
    });
  });

  describe("Slider", () => {
    const itemsToActive = [...sliderList.querySelectorAll("li")];
    describe("addFirstSlideActive", () => {
      it("first slide is active", () => {
        addFirstSlideActive(itemsToActive[0]);
        const itemActive = itemsToActive[0].classList.contains(activeSldCls);
        expect(itemActive).toBe(true);
      });
    });

    describe("getNumberActive", () => {
      const activeItem = 2;
      const itemsToGetNumber = [...sliderList.querySelectorAll("li")];
      it("return the number of the active list item", () => {
        itemsToGetNumber[0].classList.remove(activeSldCls);
        itemsToGetNumber[activeItem].classList.add(activeSldCls);
        const activeElement = getNumberActive(itemsToGetNumber);
        expect(activeElement).toBe(activeItem);
      });
      it("return zero if there is no active element", () => {
        itemsToGetNumber[activeItem].classList.remove(activeSldCls);
        const activeElement = getNumberActive(itemsToGetNumber);
        expect(activeElement).toBe(false);
      });
    });

    describe("getBullitList", () => {
      describe("getBullitList", () => {
        const itemsToBullits = [...sliderList.querySelectorAll("li")];
        getBullitList(itemsToBullits.length, slider);
        const bullitsList = document.getElementById(sliderBullitId);
        it("bullets on the page", () => {
          const isBullits = Boolean(bullitsList);
          expect(isBullits).toBe(true);
        });
        it("the number of bullets is equal of slides", () => {
          const bullitItems = [...bullitsList.querySelectorAll("div")];
          expect(itemsToBullits.length).toEqual(bullitItems.length - 1);
        });
      });

      describe("getBullitList", () => {
        document.getElementById(sliderBullitId).remove();
        getBullitList(1, slider);
        const bullitsList = document.getElementById(sliderBullitId);
        it("show bullets if there are more than 1 slides", () => {
          const bullitItems = [...bullitsList.querySelectorAll("div")];
          expect(bullitItems.length).toEqual(0);
        });
      });
    });

    describe("getNextSlide", () => {
      const bullitsList = document.getElementById(sliderBullitId);
      const itemsNextSlide = [...sliderList.querySelectorAll("li")];

      for (let i = 0; i < 5; i += 1) {
        const bullitItem = document.createElement("div");
        bullitsList.appendChild(bullitItem);
        const item = `bullit-${i}`;
        bullitItem.setAttribute("id", item);
        bullitItem.setAttribute("class", "slider__bullit-list-item");
      }

      const bullitItem = document.createElement("div");
      bullitsList.appendChild(bullitItem);
      bullitItem.setAttribute("class", "slider__bullit-list-item_active");

      const spy1 = jest.spyOn(extraFunctions, "addClassesActive");
      const spy2 = jest.spyOn(extraFunctions, "classDelete");
      const spy3 = jest.spyOn(extraFunctions, "getBullitActive");
      spy1.mockReturnValue("mocked");
      spy2.mockReturnValue("mocked");
      spy3.mockReturnValue("mocked");

      describe("getNextSlide", () => {
        it("add classes to show the next slide", () => {
          expect(getNextSlide(2, itemsNextSlide, bullitsList, "")).toBe("true");
        });
      });

      describe("getPrevSlide", () => {
        it("add classes to show the next slide", () => {
          expect(getPrevSlide(1, itemsNextSlide, bullitsList, "")).toBe("true");
        });
      });

      describe("getPrevSlide", () => {
        it("add classes to show the next slide", () => {
          expect(getPrevSlide(2, itemsNextSlide, bullitsList, 5)).toBe("true");
        });
      });

      describe("getPrevSlide", () => {
        it("add classes to show the next slide", () => {
          expect(getPrevSlide(4, itemsNextSlide, bullitsList, "")).toBe("true");
        });
      });

      describe("getPrevSlide", () => {
        it("add classes to show the next slide", () => {
          expect(getPrevSlide(0, itemsNextSlide, bullitsList, "")).toBe("true");
        });
      });

      spy1.mockRestore();
      spy2.mockRestore();
      spy3.mockRestore();
      bullitsList.innerHTML = "";
    });
  });
});
