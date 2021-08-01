const clic = document.querySelector("#click");
/* importe les fonctions active et montre */
// import Lightbox from "./fonctModal.js";
import { active, montre } from "./fonctModal.js";

const toShow = ` <iframe
class="lect"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen=""
sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
src="https://www.youtube-nocookie.com/embed/xnAd0oNpdsQ?rel=0&amp;modestbranding=1"
></iframe> 
`;

active(); /* active le modal sans le montrer */
clic.addEventListener("click", () => {
 montre(toShow);
}); /* quand on clisue sur le bouton:montre le modal avec display Set */
