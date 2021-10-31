/* Dans une liste de liens, on clique sur un lien, on referme le dropdown, on efface les videos précédentes et on affiche les nouvelles */
let litElements = (listEl, blocLink) => {
  listEl.forEach((el) => {
    el.addEventListener("click", () => {
      /* ramene les dropdown à Zero */
      blocLink.style.height = `0px`;
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

const reduct = 0.95;
let dimZoom = (el) => {
  let ratioI = 16 / 9;
  /* si ratio 43 dans la liste passer à 4/3*/
  if (el.dataset.ec === "43") ratioI = 4 / 3;
  /* ratio de la fenetre */
  const wl = window.innerWidth;
  const wh = window.innerHeight;
  const ratioW = wl / wh;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  el.style.width = wl * reduct + "px";
  el.style.height = (wl * reduct) / ratioI + "px";
  if (ratioW > ratioI) {
    el.style.width = wh * reduct * ratioI + "px";
    el.style.height = wh * reduct + "px";
  }
};

// ====== lister les liens de 'video' dont la classe correspond au menu choisi
// ====== créer les boites et Iframe YT de l'ID du lien video et rajouter le dataset ecran du lien 
let afficheLiens = (param) => {
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
  // calcul et fournit les dimensions de tous les ecrans en fonction des dataset.ec
  const ecrans = main.querySelectorAll(".ecranYT");
  ecrans.forEach((ecr) => {
    dimZoom(ecr);
  });
}

/* ========cliquer sur les menus ouvre les dropdown========= */
const main = document.querySelector(".main");
const menus = document.querySelectorAll(".btn-top");
const blocs = document.querySelectorAll(".bloc-links");
blocs.forEach((bl) => (bl.style.height = `0px`));

document.addEventListener("click", (e) => {
  const estMenu = e.target.matches(".btn-top");
  /* si ce n'est pas un bouton de menu et un menu => on ne fait rien */
  if (!estMenu && e.target.closest(".dropdown") != null) return;
  /* si c'est un menu courrent dropdown est le menu lié au bouton, on le rend actif */
  let dropCour;
  if (estMenu) {
    dropCour = e.target.querySelector(".bloc-links");
    /* toggle hauteur =0, ou totale */
    if (dropCour.style.height === `0px`)
      dropCour.style.height = dropCour.scrollHeight + "px";
    else dropCour.style.height = `0px`;
/* lit les liens qu'on clique, va chercher leur dataset et les affiche */
    const liItems = dropCour.querySelectorAll("li");
    const spane = dropCour.querySelectorAll("span");
    litElements(liItems, dropCour);
    litElements(spane, dropCour);
    
  }

  /* on efface tous les menus ouverts hors menu courant */
  document.querySelectorAll(".bloc-links").forEach((links) => {
    if (links !== dropCour) {
      links.style.height = `0px`;
    }
  });
});
