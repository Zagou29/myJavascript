/* definir les elements du modal */
const titre = "titre du modal";
const textModal =
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis nemo dolore soluta facilis molestias inventore, voluptatum cumque adipisci esse dicta porro accusantium obcaecati aspernatur enim ipsum nesciunt ullam cupiditate aut veniam rerum. Architecto, labore. Dolor vel cum culpa blanditiis.";
const boutons = [
    {
        label: "valider",
        onClick: () => {
            console.log("ç'est validé'");
            alert("BOOM!!");
        },
        ferme: true,
    },
    {
        label: "annuler",
        onClick: () => {
            console.log("c'est annulé");
        },
        ferme: true,
    },
];
/* click sur bouton d'appel du modal pour le lancer */
document.querySelector("#btn").addEventListener("click", () => {
    montreModal(titre, ` <p>${textModal}</p>`, boutons);
});
/* la fonction */
function montreModal(titre, contenuHtml, boutons) {
  const modal = document.createElement("div"); /* creer une div */
  modal.classList.add("modal"); /* en classlist "modal" */

  modal.innerHTML = `
    <div class="modal__inner">
    <div class="modal__top">
    <div class="modal__title">${titre}</div>
    
    <button class="modal__close" type="button">
    <span class="material-icons">close</span>
    </button>
    </div>
    <div class="modal__content">${contenuHtml}</div>
    <div class="modal__bottom">
    </div>
    `; /* y inserer les HTML de l'inner */
  document.body.appendChild(modal); /* l'inserer dans le body */
  document.querySelector(".modal__close").addEventListener("click", () => {
    document.body.removeChild(modal);
  }); /* supprimer la div Modal en cliquant sur close */
  /* pour chaque bouton du tableau boutons, créer un bouton de type bouton appelé modal__button. y inscrire le texte et inserer le bouton dans la div modal__bottom .*/
  /* quand on clique sur un bouton, si le booleen ferme est true, fermer le modal et appliquer la fonction on click */
  for (const bout of boutons) {
    const el = document.createElement("button");
    el.setAttribute("type", "button");
    el.classList.add("modal__button");
    el.textContent = bout.label;
    modal.querySelector(".modal__bottom").appendChild(el);
    el.addEventListener("click", () => {
      if (bout.ferme) {
        document.body.removeChild(modal);
      }
      bout.onClick();
    });
  }
}