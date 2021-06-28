/* selection des ancres , puis fonction pour fermer le menu quand on slectionne une ancre */
const ancres = Array.from(document.querySelectorAll(".nav__link"))
let fermerAncres = (nav) => {
    ancres.forEach((a) => {
        a.addEventListener("click",()=>{
            nav.classList.remove("nav--open");
            
        })
    })
}
/* gere le preload */
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
/* quand le document est lancé, cliquer sur le hamburger fait apparaitre le menu */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add("nav--open");
  });
/* cliquer sur l'overlay ferme le menu */
  document.querySelector(".nav__overlay").addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
    /* cliquer sur une ancre ferme le menu */
fermerAncres(nav)
});

