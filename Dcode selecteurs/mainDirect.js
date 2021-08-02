/* l'element Origin est le <select> avec ses options */
const originElement = document.querySelectorAll(".custom_select")[1];
customSelect = document.createElement("div");
customSelect.classList.add("select");
/* inserer le titre du tableau de selection avant le select, qui disparait */
originElement.insertAdjacentHTML(
  "beforebegin",
  `<p id="titre"> ${originElement.name}</p>`
);
/* inserer la div ".select" juste après le select d'origine */
originElement.insertAdjacentElement("afterend", customSelect);
/* pour chaque <option>, créer une div .item et data-Id */
originElement.querySelectorAll("option").forEach((optEl) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");
  itemEl.textContent = optEl.textContent;
  itemEl.setAttribute("data-id", optEl.value);
  customSelect.appendChild(itemEl);
  /* si une des options est prémarquée "selected", le custome select doit aussi etre premarqué */
  if (optEl.selected) {
    _select(itemEl);
  }
  /* si on clique sur une option : on selecte ou ou deselect */
  itemEl.addEventListener("click", () => {
    if (itemEl.classList.contains("selected")) {
      _deselect(itemEl);
    } else {
      _select(itemEl);
    }
  });
});

function _select(_itemEl) {
  const index = Array.from(customSelect.children).indexOf(_itemEl);
  originElement.querySelectorAll("option")[index].selected = true;
  _itemEl.classList.add("selected");
  affSelect(_itemEl);
}
function _deselect(_itemEl) {
  const index = Array.from(customSelect.children).indexOf(_itemEl);
  originElement.querySelectorAll("option")[index].selected = false;
  _itemEl.classList.remove("selected");
  suppSelect(_itemEl);
}

// new CustomSelect(document.querySelector(".custom_select"));

/* afficher les options selectionnées */
function affSelect(item) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<span>${item.textContent}</span>    `
  );
}
/* supprimer les options selectionées */
function suppSelect(item) {
  const list = Array.from(document.querySelectorAll("span"));
  console.log(list);
  /* liste des span, et elimination  s'il existe */
  list.forEach((sp) => {
    if (sp.textContent === item.textContent) {
      sp.remove();
    }
  });
}
