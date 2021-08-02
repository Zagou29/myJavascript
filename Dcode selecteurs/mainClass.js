class CustomSelect {
  constructor(origin) {
    /* l'element Origin est le <select> avec ses options */
    this.originElement = origin;
    this.customSelect = document.createElement("div");
    this.customSelect.classList.add("select");
    /* inserer le titre du tableau de selection avant le select, qui disparait */
    this.originElement.insertAdjacentHTML("beforebegin", `<p id="titre"> ${this.originElement.name}</p>`)
    
    /* inserer la div ".select" juste après le select d'origine */
    this.originElement.insertAdjacentElement("afterend", this.customSelect);
    /* pour chaque <option>, créer une div .item et data-Id */
    this.originElement.querySelectorAll("option").forEach((optEl) => {
      const itemEl = document.createElement("div");
      itemEl.classList.add("item");
      itemEl.textContent = optEl.textContent;
      itemEl.setAttribute("data-id", optEl.value);
      this.customSelect.appendChild(itemEl);
      /* si une des options est prémarquée "selected", le custome select doit aussi etre premarqué */
      if (optEl.selected) {
        this._select(itemEl);
      }
      /* si on clique sur une option : on selecte ou ou deselect */
      itemEl.addEventListener("click", () => {
        if (itemEl.classList.contains("selected")) {
          this._deselect(itemEl);
        } else {
          this._select(itemEl);
        }
      });
    });
  }
  _select(_itemEl) {
    const index = Array.from(this.customSelect.children).indexOf(_itemEl);
    this.originElement.querySelectorAll("option")[index].selected = true;
    _itemEl.classList.add("selected");
    affSelect(_itemEl);
  }
  _deselect(_itemEl) {
    const index = Array.from(this.customSelect.children).indexOf(_itemEl);
    this.originElement.querySelectorAll("option")[index].selected = false;
    _itemEl.classList.remove("selected");
    suppSelect(_itemEl);
  }
}
document.querySelectorAll(".custom_select").forEach((selectElement) => {
  new CustomSelect(selectElement);
 
});

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
  /* liste des span, et elmination  s'il existe */
  list.forEach((sp) => {
    if (sp.textContent === item.textContent) {
      sp.remove();
    }
  });
}
