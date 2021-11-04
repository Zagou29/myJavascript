let slide = new Array(
  "/pictures/Diapos-20.jpg",
  "/pictures/Diapos-1.jpg",
  "/pictures/Diapos-10.jpg",
  "/pictures/Diapos-11.jpg",
  "/pictures/Diapos-12.jpg",
  "/pictures/Diapos-13.jpg",
  "/pictures/Diapos-14.jpg"
);
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}
const prec = document.getElementById("precedent");
const suiv = document.getElementById("suivant");
/* click fleche Gauche => Précédent */
prec.addEventListener("click", (e) => {
  ChangeSlide(-1);
});
/* click fleche Gauche => Suivant */
suiv.addEventListener("click", () => {
  ChangeSlide(1);
});
/* flche droite =>Prec, feche gauche=>suiv */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    ChangeSlide(-1);
  }
  if (e.key === "ArrowRight") {
    ChangeSlide(1);
  }
});
