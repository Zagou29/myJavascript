/* identifier les items de chaque carousel */
document.querySelectorAll(".carousel").forEach((carousel) => {
  const item = carousel.querySelectorAll(".items");
  /* pour chaque item, créer un span class=button, avec le n0 de l'item comme textContent */
  const buttonsHtml = Array.from(item, (i) => {
    return `<span class="button">${i.dataset.id}</span> `;
  });
  /* inserer en derniere ligne du carousel, une dic "Nav" avec tous les spans */
  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div  class= "nav" >
        ${buttonsHtml.join("")} 
        </div > `
  );
  /* ecouter chaque bouton, enlever les choisis et rajouter au bouton cliqué */
  const buttons = carousel.querySelectorAll(".button");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      effacer();
      rajouter(i);
    });
  });
  /* ecouter le clavier fleches gauche ou droite */
  document.addEventListener("keydown", (e) => {
    let i = 0;
    /* retrouver le n° du span button_choisi */
    document.querySelectorAll("span").forEach((span, ind) => {
      if (span.className === "button button_choisi") {
        i = ind;
      }
    });
    effacer();
    if (e.key === "ArrowRight") {
      i = i + 1;
      if (i > buttons.length - 1) i = 0;
    }
    if (e.key === "ArrowLeft") {
      i = i - 1;
      if (i < 0) i = buttons.length - 1;
    }
    rajouter(i);
  });
  rajouter(0);

  /* fonction pour effacer les _choisi */
  function effacer() {
    item.forEach((it) => it.classList.remove("item_choisi"));
    buttons.forEach((but) => but.classList.remove("button_choisi"));
  }
  /* fonction pour arjouter les _choisi */
  function rajouter(i) {
    buttons[i].classList.add("button_choisi");
    item[i].classList.add("item_choisi");
  }
});
