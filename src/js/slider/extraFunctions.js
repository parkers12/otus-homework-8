export function addClassesActive(
  numderActiveSlide,
  nextElem,
  classesAdd,
  classes,
  arr
) {
  const activeSlide = arr[numderActiveSlide];
  const nextSlide = arr[nextElem];

  activeSlide.classList.add(...classes);
  nextSlide.classList.add(...classesAdd);
}

export function classDelete(
  classesAll,
  classesDel,
  activeSlide,
  nextElem,
  arr
) {
  for (let j = 0; j < arr.length; j += 1) {
    if (j !== nextElem) {
      arr[j].classList.remove(...classesAll);
    }
  }

  if (typeof classesDel === "string") {
    // string or []
    arr[activeSlide === arr.length - 1 ? 0 : nextElem].classList.remove(
      classesDel
    );
  } else {
    arr[activeSlide === arr.length - 1 ? 0 : nextElem].classList.remove(
      ...classesDel
    );
  }
}

export function getBullitActive(sliderBullit, nextElem) {
  let positionLeft = -3;
  for (let i = 0; i < nextElem; i += 1) {
    positionLeft += 28;
  }

  const activeBullit = sliderBullit.getElementsByClassName(
    "slider__bullit-list-item_active"
  );
  activeBullit[0].setAttribute("style", `left: ${positionLeft}px`);
}
