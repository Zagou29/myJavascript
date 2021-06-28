/* selectionner la div qui contient le menu */
const liens = document.querySelector(".liens");
/* div handburger */
const bascule = document.querySelector(".bascule");
const corps = document.querySelector("#overlay");
/* tous les liens du Menu */
const ancres = Array.from(document.querySelectorAll(".liens li a"));
/* le span pour afficher le menu selectionné */
const affChoix = document.getElementById("affMenu");
/* cliquer sur le handburger pour afficherle menu */
bascule.addEventListener("click", () => {
  liens.classList.toggle("actif");
});
 corps.addEventListener("click", () => {
  liens.classList.remove("actif"); });

/* technique pour faire apparaitre ou disparaitre un block */
// let basc = () => {
//   liens.style.display = liens.style.display == "none" ? "block" : "none";
// };
// bascule.addEventListener("click", basc);

/* fonction pour choisir un menu, le faire disparaitre et afficher le choix*/
let choisirLien = () => {
  ancres.forEach((lien) => {
    lien.addEventListener("click", () => {
      liens.classList.toggle("actif", false);
      affChoix.innerText = lien.innerText;
    });
  });
};
choisirLien();
