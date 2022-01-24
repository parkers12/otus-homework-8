import {
  getArraySlides,
  addFirstSlideActive,
  getNumberActive,
  getNextSlide,
  // getPrevSlide,
  getBullitList,
} from "./functions";

import config from "./config";

import {
  addClassesActive,
  // classDelete,
  // getBullitActive,
} from "./extraFunctions";

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
// const activeSlPr = config.prevSlideClass;
// const activeSlNx = config.nextSlideClass;

describe("Plugin Slider", () => {
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
        itemsNextSlide[numberSlTest].classList.add(activeSldCls);

        getNextSlide(numberSlTest, itemsNextSlide, bullitsList, numberNtTest);
        const classAct = itemsNextSlide[4].classList.contains(
          config.activeSlideClass
        );

        it("go from slide 2 to slide 5", () => {
          expect(addClassesActive).toHaveBeenCalled();
          // expect(classDelete).toHaveBeenCalled();
          // expect(getBullitActive).toHaveBeenCalled();
          expect(classAct).toBe(true);
        });
      });

      // describe("getNextSlide", () => {
      //   it("go from last slide to first", () => {
      //     getPrevSlide(4, itemsNextSlide, bullitsList, "");
      //     const classAct = itemsNextSlide[0].classList.contains(
      //       config.activeSlideClass
      //     );
      //     expect(classAct).toBe(true);
      //   });
      // });

      // describe("getPrevSlide", () => {
      //   it("go from first slide to last", () => {
      //     getPrevSlide(0, itemsNextSlide, bullitsList, "");
      //     const classAct = itemsNextSlide[4].classList.contains(
      //       config.activeSlideClass
      //     );
      //     expect(classAct).toBe(true);
      //   });
      // });

      // describe("getNextSlide", () => {
      //   it("subfunction call to getNextSlide", () => {
      //     getNextSlide(2, itemsNextSlide, bullitsList, "");
      //     expect(mockAddClassesActive).toHaveBeenCalled();
      //     expect(mockClassDelete).toHaveBeenCalled();
      //     expect(mockGetBullitActive).toHaveBeenCalled();
      //   });
      // });

      // describe("getPrevSlide", () => {
      //   it("subfunction call to getPrevSlide", () => {
      //     getPrevSlide(1, itemsNextSlide, bullitsList, "");
      //     expect(mockAddClassesActive).toHaveBeenCalled();
      //     expect(mockClassDelete).toHaveBeenCalled();
      //     expect(mockGetBullitActive).toHaveBeenCalled();
      //   });
      // });

      bullitsList.innerHTML = "";
    });
  });
});
