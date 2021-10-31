
const main = document.querySelector(".main");

/* toogle le dropdown a zero ou la hauteur totale */
let toggleIndex = false;
let param = "";
let toggleDropDown = (bloc) => {
  if (!toggleIndex) {
    bloc.style.height = bloc.scrollHeight + "px";
    toggleIndex = true;
    return;
  }
  bloc.style.height = 0;
  toggleIndex = false;
};
/* Dans une liste de liens, on clique sur un lien, on referme le dropdown, on efface les videos précédentes et on affiche les nouvelles */
let litElements = (tableau, liens) => {
  tableau.forEach((el) => {
    el.addEventListener("click", () => {
      /* ramene les dropdown à Zero */
      liens.style.height = `0px`;
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
const reduct = 0.95;
let dimZoom = (el) => {
  if (el.dataset.ec === "43") ratioI = 4 / 3;
  else ratioI = 16 / 9;
  /* ratio de la fenetre */
  const ratioW = window.innerWidth / window.innerHeight;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  el.style.width = window.innerWidth * reduct + "px";
  el.style.height = (window.innerWidth * reduct) / ratioI + "px";
  if (ratioW > ratioI) {
    el.style.width = window.innerHeight * reduct * ratioI + "px";
    el.style.height = window.innerHeight * reduct + "px";
  }
};

/* ========cliquer sur les menus ouvre les dropdown========= */
const menus = document.querySelectorAll(".btn-top");
const blocs = document.querySelectorAll(".bloc-links");
menus.forEach((men) => {
  const drop = men.querySelector(".dropdown");
  const blocLinks = drop.querySelector(".bloc-links");
  litElements(liItems, blocLinks);
  litElements(spane, blocLinks);
  const spane = blocLinks.querySelectorAll("span");
  men.addEventListener("click", (e) => {
    toggleDropDown(blocLinks);
  });
  /* si on clique en dehors, referme les dropdown */
  main.addEventListener("click", () => {
    blocLinks.style.height = `0px`;
    toggleIndex = false;
  });

  /* attend sur chaque lien du menu, et si click efface les anciennes et affiche les nouvelles videos */
  litElements(liItems, blocLinks);
  litElements(spane, blocLinks);
});

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
