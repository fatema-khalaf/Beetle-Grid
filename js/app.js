const btntext = document.querySelector(".btn__text");
const leftFigure = document.querySelector(".left__content__figure");
const figureContent = document.querySelector(".left__content__figure--content");
const figureChart = document.querySelector(".left__content__figure--chart");
const leftTitle = document.querySelector(".left__content__figure--title");
const fill = document.querySelectorAll(".fill");
var ctx = document.getElementById("myChart"); // node

const left = document.querySelector(".left");
const leftImg = document.querySelector(".left__hold");
const leftHeading = document.querySelector(".left__content__heading");
const btnIcon = document.querySelector(".btn__icon");
const btnleft = document.querySelector(".btn-left");
const btnLeft = document.querySelector(".left__btn");
const icons = document.querySelector(".icons");
const titleLeft = document.querySelector(".left__content--title");
const imageLeft = document.querySelector(".left__content--image");
const chartLeft = document.querySelector(".left__content--chart");
let x = 0;
btnleft.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("flex__end");
  btnleft.classList.toggle("btn--click");
  btnIcon.classList.toggle("btn__icon--click");
  left.classList.toggle("left--open");
  if (right.style.display !== "none") {
    right.style.display = "none";
    console.log(right.style.display);
  } else {
    right.style.display = "grid";
    console.log(right.style.display);
  }
  leftImg.classList.toggle("left__hold--open");
  leftHeading.classList.toggle("mt-m");
  icons.classList.toggle("display");
  titleLeft.classList.toggle("display");
  imageLeft.classList.toggle("display");
  chartLeft.classList.toggle("display");
});

const btnrightIcon = document.querySelector(".btn-right__icon");
const right = document.querySelector(".right");
const rightImg = document.querySelector(".right__hold");
const rightHeading = document.querySelector(".right__content__heading");
const container = document.querySelector(".container");
const btnright = document.querySelector(".btn-right");
const btnRight = document.querySelector(".right__btn");
const iconsRight = document.querySelector(".icons__right");
const titleRight = document.querySelector(".right__content--title");
const imageRight = document.querySelector(".right__content--image");
const chartRight = document.querySelector(".right__content--chart");
btnright.addEventListener("click", (e) => {
  e.preventDefault();

  container.classList.add("flex__end");
  btnright.classList.toggle("btn--click");
  btnrightIcon.classList.toggle("btn-right__icon--click");
  iconsRight.classList.toggle("icons__right--click");
  right.classList.toggle("right--open");
  rightImg.classList.toggle("right__hold--open");
  rightHeading.classList.toggle("mt-m");
  icons.classList.toggle("display");
  titleRight.classList.toggle("display");
  imageRight.classList.toggle("display");
  chartRight.classList.toggle("display");
});
fill.forEach((el, i) => {
  el.style.height = el.innerText;
  // el.style.animation = `show-bar-one ${i + 0.2}s`;
});
