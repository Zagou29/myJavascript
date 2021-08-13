const items = document.querySelectorAll("img");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

let slideChange = (sens) => {
  items[count].classList.remove("active");
  if (sens === 1) {
    if (count < nbSlide - 1) {
      count++;
    } else {
      count = 0;
    }
  }
  if (sens === -1) {
    if (count > 0) {
      count--;
    } else {
      count = nbSlide - 1;
    }
  }
  items[count].classList.add("active");
};
let keyPress = (e) => {
  if (e.keyCode === 37) {
    slideChange(-1);
  }
  if (e.keyCode === 39) {
    slideChange(1);
  }
};

suivant.addEventListener("click", () => {
  slideChange(1);
});
precedent.addEventListener("click", () => {
  slideChange(-1);
});

document.addEventListener("keydown", keyPress);
