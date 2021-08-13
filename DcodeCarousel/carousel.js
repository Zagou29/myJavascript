document.querySelectorAll(".carousel").forEach((carousel) => {
  const item = carousel.querySelectorAll(".items");
  const buttonsHtml = Array.from(item, (i) => {
      console.log(i.textContent)
      return `<span class="button">${
        i.dataset.id[i.dataset.id.length - 1]
      }</span> `;
  });
  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div  class= "nav" >
        ${buttonsHtml.join("")} 
        </div > `
  );
  const buttons = carousel.querySelectorAll(".button");
    let ind = 0;
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      item.forEach((it) => it.classList.remove("item_choisi"));
      buttons.forEach((but) => but.classList.remove("button_choisi"));
      button.classList.add("button_choisi");
        item[i].classList.add("item_choisi");
        ind = i;
        console.log(ind)
    });
  });

  let i = ind;
  document.addEventListener("keydown", (e) => {
    item.forEach((it) => it.classList.remove("item_choisi"));
    buttons.forEach((but) => but.classList.remove("button_choisi"));
    if (e.key === "ArrowRight") {
      i = i + 1;
      if (i > buttons.length - 1) {
        i = 0;
      }
    }
    if (e.key === "ArrowLeft") {
      i = i - 1;
      if (i < 0) {
        i = buttons.length - 1;
      }
    }
    buttons[i].classList.add("button_choisi");
      item[i].classList.add("item_choisi");
      ind = i;
      console.log(ind)
  });
  buttons[0].classList.add("button_choisi");
  item[0].classList.add("item_choisi");
});
