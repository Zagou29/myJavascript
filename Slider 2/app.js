let dimZoom = (el) => {
  const h = el.naturalHeight;
  const l = el.naturalWidth;
  const ratioI = l / h;
  /* ratio de la fenetre */
  const ratioW = window.innerWidth / window.innerHeight;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  el.style.width = 95 + "vw";
  el.style.height = "auto";
  if (ratioW > ratioI) {
    el.style.width = "auto";
    el.style.height = 95 + "vh";
  }
};

const img__slider = document.querySelectorAll(".slider img");
let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");

let enleverActivepictures = () => {
  img__slider.forEach((el) => {
    el.classList.remove("active");
  });
};
let numero = 0;
let changeSlide = (sens, tableau) => {
  numero = numero + sens;
  if (numero < 0) {
    numero = tableau.length - 1;
  }
  if (numero > tableau.length - 1) {
    numero = 0;
  }
  return numero;
};

suivant.addEventListener("click", () => {
  enleverActivepictures();
  img__slider[changeSlide(1, img__slider)].classList.add("active");
  dimZoom(document.querySelector(".active"));
});
precedent.addEventListener("click", () => {
  enleverActivepictures();
  img__slider[changeSlide(-1, img__slider)].classList.add("active");
  dimZoom(document.querySelector(".active"));
});
let inter = 1;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    enleverActivepictures();
    let num = changeSlide(1, img__slider);
    img__slider[num].classList.add("active");
    dimZoom(document.querySelector(".active"));
  }
  if (e.key === "ArrowLeft") {
    enleverActivepictures();
    img__slider[changeSlide(-1, img__slider)].classList.add("active");
    dimZoom(document.querySelector(".active"));
  }
  if (e.key === " ") {
    console.log(inter);
    if (inter === 1) {
      inter = setInterval(() => {
        enleverActivepictures();
        img__slider[changeSlide(1, img__slider)].classList.add("active");
        dimZoom(document.querySelector(".active"));
      }, 500);
    } else {
      clearInterval(inter);
      inter = 1;
    }
  }
});
