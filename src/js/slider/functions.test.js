import config from "./config";
import {
  getArraySlides,
  addFirstSldActive,
  getNumberActive,
  getNextSlide,
  getPrevSlide,
  getBullitList,
} from "./functions";

import {
  addClassesActive,
  classDelete,
  getBullitActive,
} from "./extraFunctions";

jest.useFakeTimers();

jest.mock("./extraFunctions", () => {
  const originalModule = jest.requireActual("./extraFunctions");
  return {
    __esModule: true,
    ...originalModule,
    addClassesActive: jest.fn(),
    classDelete: jest.fn(),
    getBullitActive: jest.fn(),
  };
});

const activeSldCls = config.activeSlideClass;
const sliderBullitId = config.sliderBullit;
const nexrSldCls = config.nextSlideClass;

describe("Plugin Slider", () => {
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
    describe("addFirstSldActive", () => {
      it("first slide is active", () => {
        addFirstSldActive(itemsToActive[0]);
        const itemActive = itemsToActive[0].classList.contains(activeSldCls);
        expect(itemActive).toBe(true);
      });
    });

    describe("getNumberActive", () => {
      const activeItem = 1;
      const itemsToGetNumber = [...sliderList.querySelectorAll("li")];
      it("return the number of the active list item", () => {
        itemsToGetNumber[0].classList.remove(activeSldCls);
        itemsToGetNumber[activeItem].classList.add(activeSldCls);
        const activeElement = getNumberActive(itemsToGetNumber);
        expect(activeElement).toBe(activeItem);
      });
      it("return -1 if there is no active element", () => {
        itemsToGetNumber[activeItem - 1].classList.remove(activeSldCls);
        itemsToGetNumber[activeItem].classList.remove(activeSldCls);
        const activeElement = getNumberActive(itemsToGetNumber);
        expect(activeElement).toBe(-1);
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

    describe("getNextPrevSlide", () => {
      beforeEach(() => {
        jest.runAllTimers();
      });

      const bullitsList = document.getElementById(sliderBullitId);
      const itemsNextSlide = [...sliderList.querySelectorAll("li")];
      const numberSlTest = 1;
      const numberNtTest = 4;

      for (let i = 0; i < 5; i += 1) {
        const bullitItem = document.createElement("div");
        const item = `bullit-${i}`;
        bullitItem.setAttribute("id", item);
        bullitItem.setAttribute("class", "slider__bullit-list-item");
        bullitsList.appendChild(bullitItem);
      }

      const bullitItem = document.createElement("div");
      bullitItem.setAttribute("class", "slider__bullit-list-item_active");
      bullitsList.appendChild(bullitItem);

      describe("getSlide", () => {
        it("go from slide 2 to slide 5", () => {
          jest.runAllTimers();
          addClassesActive.mockImplementation(() => [
            "li.slider__list-item",
            "li.slider__list-item",
            "li.slider__list-item",
            "li.slider__list-item.active",
            "li.slider__list-item",
          ]);
          itemsNextSlide[numberSlTest].classList.add(activeSldCls);
          getNextSlide(numberSlTest, itemsNextSlide, bullitsList, numberNtTest);
          const classAct = itemsNextSlide[numberNtTest].classList.contains(
            config.activeSlideClass
          );
          expect(addClassesActive).toHaveBeenCalled();
          // expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
          expect(classAct).toBe(false);
        });
      });

      describe("getSlide", () => {
        it("go from last slide to first", () => {
          itemsNextSlide[itemsNextSlide.length - 1].classList.add(activeSldCls);
          getNextSlide(0, itemsNextSlide, bullitsList, numberNtTest);
          expect(addClassesActive).toHaveBeenCalled();
          expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
        });
      });

      describe("getSlide", () => {
        it("go from last slide to first", () => {
          itemsNextSlide[itemsNextSlide.length - 1].classList.add(activeSldCls);
          getNextSlide(numberNtTest, itemsNextSlide, bullitsList, "");
          expect(addClassesActive).toHaveBeenCalled();
          expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
        });
      });

      describe("getSlide", () => {
        it("go from last slide to first", () => {
          itemsNextSlide[numberSlTest].classList.add(activeSldCls);
          getNextSlide(numberSlTest, itemsNextSlide, bullitsList, "");
          expect(addClassesActive).toHaveBeenCalled();
          expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
        });
      });

      describe("getPrevSlide", () => {
        it("go from last slide to first", () => {
          itemsNextSlide[itemsNextSlide.length - 1].classList.add(activeSldCls);
          getPrevSlide(0, itemsNextSlide, bullitsList, numberNtTest);
          const classAct = itemsNextSlide[numberNtTest].classList.contains(
            config.activeSlideClass
          );
          expect(addClassesActive).toHaveBeenCalled();
          expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
          expect(classAct).toBe(true);
        });
      });

      describe("getPrevSlide", () => {
        it("go from first slide to last", () => {
          itemsNextSlide[0].classList.add(activeSldCls);
          getPrevSlide(
            itemsNextSlide.length - 1,
            itemsNextSlide,
            bullitsList,
            0
          );
          const classAct = itemsNextSlide[numberNtTest].classList.contains(
            config.activeSlideClass
          );
          expect(addClassesActive).toHaveBeenCalled();
          expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
          expect(classAct).toBe(true);
        });
      });

      describe("getPrevSlide", () => {
        it("go from first slide to last", () => {
          itemsNextSlide[0].classList.add(activeSldCls);
          getPrevSlide(0, itemsNextSlide, bullitsList, "");
          const classAct = itemsNextSlide[numberNtTest].classList.contains(
            config.activeSlideClass
          );
          expect(addClassesActive).toHaveBeenCalled();
          expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
          expect(classAct).toBe(true);
        });
      });

      describe("getPrevSlide", () => {
        it("go from first slide to last", () => {
          itemsNextSlide[numberSlTest].classList.add(activeSldCls);
          getPrevSlide(numberSlTest, itemsNextSlide, bullitsList, "");
          const classAct = itemsNextSlide[numberNtTest].classList.contains(
            config.activeSlideClass
          );
          expect(addClassesActive).toHaveBeenCalled();
          expect(classDelete).toHaveBeenCalled();
          expect(getBullitActive).toHaveBeenCalled();
          expect(classAct).toBe(true);
        });
      });

      describe("getSlide", () => {
        it("not work getNextSlide", () => {
          itemsNextSlide[0].classList.add(nexrSldCls);
          const res = getNextSlide(0, itemsNextSlide, bullitsList, "");
          expect(res).toBe(false);
        });
      });

      describe("getPrevSlide", () => {
        it("not work getPrevSlide", () => {
          itemsNextSlide[0].classList.add(nexrSldCls);
          const res = getPrevSlide(0, itemsNextSlide, bullitsList, "");
          expect(res).toBe(false);
        });
      });

      bullitsList.innerHTML = "";
    });
  });
});
