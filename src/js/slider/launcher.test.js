import config from "./config";
import { launchSlider } from "./launcher";
import { getPrevSlide, getNextSlide } from "./functions";

jest.mock("./functions", () => {
  const originalModule = jest.requireActual("./functions");
  return {
    __esModule: true,
    ...originalModule,
    getPrevSlide: jest.fn(),
    getNextSlide: jest.fn(),
  };
});

describe("launchSlider", () => {
  document.body.innerHTML = "";
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
  const items = [...sliderList.querySelectorAll("li")];
  const bullit = document.getElementById(config.sliderBullit);

  it("Without active slide", () => {
    console.log = jest.fn();
    launchSlider(bullit, true, items);
    expect(console.log.mock.calls[0][0]).toBe("Error: without active slide");
  });

  it("Get call functions", () => {
    items[0].classList.add(config.activeSlideClass);
    launchSlider(bullit, false, items);
    expect(getNextSlide).toHaveBeenCalled();
  });

  it("show prev slide", () => {
    items[0].classList.add(config.activeSlideClass);
    launchSlider(bullit, true, items);
    expect(getPrevSlide).toHaveBeenCalled();
  });
});
