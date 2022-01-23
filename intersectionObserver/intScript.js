const box = document.querySelector("#box");
const cartes = document.querySelectorAll(".car");
const cont = document.querySelector(".container");

const observer = new IntersectionObserver(
  (obs) => {
    console.log(obs[0].target.innerText);
    obs.forEach((ent) => {
      ent.target.classList.toggle("show", ent.isIntersecting);
    });
  },
  {
// root: cont,
    threshold: 0,
  rootMargin: "1000px",
  }
);
cartes.forEach((carte) => {
  observer.observe(carte);
});

const lastCarteObserver = new IntersectionObserver((obs) => {
  //derniere carte de la serie carte lue par observer ligne 18
  const lastCarte = obs[0];
  // si cette carte n'est pas a l'ecran (IsInter faux) => Rien
  if (!lastCarte.isIntersecting) return;
  //si oui, créer une nouvelle carte qui devient la dernière et l'observer => si devient visible la montrer"show"
  chargeNouvCartes();
  //arreter d'observer cette denière carte
  lastCarteObserver.unobserve(lastCarte.target);
  // //observer la dernier carte nouvelle
  lastCarteObserver.observe(cont.querySelector(".car:last-child"));
}, {});
lastCarteObserver.observe(cont.querySelector(".car:last-child"));

const conta = document.querySelector(".container");
let i = 0;
function chargeNouvCartes() {
  // for (i=0; i<10; i++){
  //     const nouvCarte = document.createElement("div");
  //     nouvCarte.textContent = "nouveau";
  //     nouvCarte.classList.add("car");
  //     observer.observe(nouvCarte);
  //     conta.append(nouvCarte);
  // }
  i++;
  conta.insertAdjacentHTML("beforeend", ` <div class="car">carte ${i}</div>`);
  nouvCarte = conta.querySelector(".car:last-child");
  observer.observe(nouvCarte);
}
// }
