const leftArrow = document.getElementById("arrow_left");
const rightArrow = document.getElementById("arrow_right");
const pageElement = document.getElementById("page");
const lastPage = document.getElementsByClassName("page__wrapper").length - 1;
let currentPage = 0;

// if page #1. current page = 0; translateX(0);
// if page #2. current page = 1; translateX(-100%);
// if page #3. current page = 2; translateX(-200%);

function createStepTranslateX(page) {
  const stepTranslateX = page * -100;
  return `translateX(${stepTranslateX}%)`;
}

function changeCurrentSlide(page) {
  pageElement.style.transform = createStepTranslateX(page);
}

leftArrow.addEventListener("click", () => {
  if (currentPage === 0) {
    return;
  }
  changeCurrentSlide(--currentPage);
});

rightArrow.addEventListener("click", () => {
  if (currentPage === lastPage) {
    return;
  }
  changeCurrentSlide(++currentPage);
});
