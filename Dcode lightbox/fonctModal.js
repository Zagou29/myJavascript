// export default class Lightbox {
  /* ouvre le modal */
   let active=()=> {
    /* insere le modal dans le body, mais avec display None */
    document.body.insertAdjacentHTML(
      "beforeend",
      `
         <div class="lightbox" id ="lightbox" style="display : none">
            <div class="inner">
                <button type="button" class="close"> 
                  &times;
                </button>
                <div class="contenu">
                </div>
            </div>
         </div>       
        `
    );
    const lightbox = document.querySelector("#lightbox");
    const btnClose = lightbox.querySelector(".close");
    const contenu = lightbox.querySelector(".contenu");
    /* fonction pour fermer le modal */
    const closeLightbox = () => {
      lightbox.style.display = "none";
      contenu.innerHTML = "";
    };
    /* ferme le modal quand on clique sur l'exterieur du modal */
    lightbox.addEventListener("mousedown", (e) => {
      if (e.target.matches("#lightbox")) {
        closeLightbox();
      }
    });
  /* idem quand on clique sur le bouton close */
    btnClose.addEventListener("click", () => {
      closeLightbox();
    });
  }
  /* montre le modal en passant à display set */
  let montre=(contenuLightbox)=> {
    const boite = lightbox.querySelector(".inner")
    const contenu = document.querySelector("#lightbox .contenu");
    document.querySelector("#lightbox").style.display = null;
  
    // if (contenuLightbox === "string") {
    //   contenu.innerHTML = contenuLightbox;
    // } else {
    //   contenu.innerHTML = "";
    //   contenu.appendChild(contenuLightbox);
    // }
    contenu.innerHTML = contenuLightbox;
    bouger(boite)
  }
  export{ active, montre}
// }

function bouger(el) {
  /* quand la souris est appuyee sur l'element, la fonction mousedown s'appplique */
  el.addEventListener("mousedown", mousedown);
  el.style.cursor = "grab";
  function mousedown(e) {
    /*    initialiser les coordonnées du pointeur  */
    /* let prevX = e.clientX;
    let prevY = e.clientY; */
    /* quand on bouge la souris (appuyée), fonction mousmove */
    window.addEventListener("mousemove", mousemove);
    /* quand on releve la souris fonction mouseup */
    window.addEventListener("mouseup", mouseup);
    /* la fonction mousemove */
    function mousemove(e) {
      /* rect recupere les infos de l'element Modal */
      const rect = el.getBoundingClientRect();
      /* deplacer Modal de l'ecart précédent */
      /* nouvelle position X a gauche = ancienne + ecart */
      el.style.left = rect.left + e.movementX + "px";
      el.style.top = rect.top + e.movementY + "px";

    }
    /* quand la souris se leve, stopper le mouvement */
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      // window.removeEventListener("mouseup", mouseup);
    }
  }
}

