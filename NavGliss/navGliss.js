/* selection des ancres , puis fonction pour fermer le menu quand on slectionne une ancre */
const ancres = Array.from(document.querySelectorAll(".nav__link"));
const titreMenu = document.querySelector("#choixMenu");
let fermerAncres = (nav) => {
  ancres.forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("nav--open");/* fermer le menu */
      titreMenu.innerHTML = a.innerHTML;/* afficher le menu dans l'entete */
      affVideo(a.dataset.id);/* afficher la video */
    });
  });
};
/* gere le preload */
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
/* quand le document est lancé, cliquer sur le hamburger fait apparaitre le menu */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  document.querySelector("#hamburger").addEventListener("click", () => {
    nav.classList.add("nav--open");
  });
  /* cliquer sur l'overlay ferme le menu */
  document.querySelector(".nav__overlay").addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
  /* cliquer sur une ancre ferme le menu */
  fermerAncres(nav);
});
/* afficher une video Youtube avec le video_id= ID */
function affVideo(id) {
  document.querySelector(".container").innerHTML = ` <iframe
  class="lect"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""
  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
  src="https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;modestbranding=1"
></iframe>`;
}
function affPlay(id) {
  document.querySelector(".container").innerHTML = ` <iframe
  class="lect"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""
  sandbox="allow-forms  allow-scripts allow-pointer-lock  allow-same-origin allow-top-navigation"
  src="https://www.youtube-nocookie.com/embed/videoseries?list=${id}&amp;rel=0&amp;modestbranding=1"
  ></iframe>`;
}
