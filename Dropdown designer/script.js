const dropdown = document.querySelector(".dropdown");
const dropdown2 = document.querySelector(".dropdown2");
const blocLinks = dropdown.querySelector(".bloc-links");
const blocLinks2 = dropdown2.querySelector(".bloc-links");
const btnDrop = document.querySelector(".btn-top");
const btnDrop2 = document.querySelector(".btn-top2");
const liItems = dropdown.querySelectorAll(".dropdown li");
const liItems2 = dropdown2.querySelectorAll(".dropdown2 li");
const spane = blocLinks.querySelectorAll("span");
const spane2 = blocLinks2.querySelectorAll("span");
const main = document.querySelector(".main");

/* toogle le dropdown a zero ou la hauteur totale */
let toggleIndex = false;
let param = "";
let toggleDropDown = (bloc) => {
  console.log(bloc);
  if (!toggleIndex) {
    bloc.style.height = bloc.scrollHeight + "px";
    toggleIndex = true;
    return;
  }
  bloc.style.height = 0;
  toggleIndex = false;
};
/* remet le dropdown a zero */
let ferme = () => {
  blocLinks.style.height = `0px`;
  blocLinks2.style.height = `0px`;
  toggleIndex = false;
};
/* Dans une liste de liens, on clique sur un lien, on referme le dropdown, on efface les videos précédentes et on affiche les nouvelles */
let litElements = (tableau) => {
  tableau.forEach((el) => {
    el.addEventListener("click", () => {
      /* ramene les dropdown à Zero */
      ferme();
      /* supprime des ecrans YT */
      main.innerHTML = "";
      /* prépare les classes à chercher à partir des dataset des menus */
      if (el.dataset.ville) {
        afficheLiens(`.${el.dataset.id}.${el.dataset.ville}`);
      } else {
        afficheLiens(`.${el.dataset.id}`);
      }
    });
  });
};
/* ===dimensions frames: compare le ratio aux dim de la fenetre et affiche en fonction du ratio 43 ou 169 des videos YT, indiqué via le dataset ec (passé via rat)*/
let ratioI = 0;
const reduct = .95;
let dimZoom = (el) => {
  if (el.dataset.ec === "43") ratioI = 4 / 3;
  else ratioI = 16 / 9;
  /* ratio de la fenetre */
  const ratioW = window.innerWidth / window.innerHeight;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  el.style.width = window.innerWidth * reduct + "px";
  el.style.height = window.innerWidth * reduct / ratioI + "px";
  if (ratioW > ratioI) {
    el.style.width = window.innerHeight * reduct * ratioI + "px";
    el.style.height = window.innerHeight * reduct + "px";
  }
};

/* ========cliquer sur les menus ouvre les dropdown========= */
btnDrop.addEventListener("click", () => toggleDropDown(blocLinks));
btnDrop2.addEventListener("click", () => toggleDropDown(blocLinks2));
/* si on clique en dehors, referme les dropdown */
main.addEventListener("click", ferme);

/* attend sur chaque lien du menu, et si click efface les anciennes et affiche les nouvelles videos */
litElements(liItems);
litElements(spane);
litElements(liItems2);
litElements(spane2);

/* ======on passe le code de la classe selectionnée, on selectionne les liens de meme classe, et on affiche les iframe YT dont l'ID est dans le dataset du lien  et le format 43 ou169 dans le dataset EC*/
function afficheLiens(param) {
  const lien = document.querySelectorAll(param);
  lien.forEach((vid) => {
    main.insertAdjacentHTML(
      "beforeend",
      ` <div class="ecranYT" data-ec ="${vid.dataset.ec}">
        <iframe
          class="lect"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          src="https://www.youtube-nocookie.com/embed/${vid.dataset.id}?rel=0&amp;modestbranding=1">
        </iframe>
   </div>
   </br>`
    );
  });
  /* recalcule tous les ecrans */
  const ecrans = main.querySelectorAll(".ecranYT");
  ecrans.forEach((ecr) => {
    dimZoom(ecr);
  });
}
