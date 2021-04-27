let bonjour = document.getElementById("b1");
let ajouter = document.getElementById("b2");
bonjour.addEventListener("click", alerte);
ajouter.addEventListener("click", ajout);

function alerte() {
  alert("Bonjour");
}
function ajout() {
  let para = document.createElement("div");
  para.textContent = "Paragraphe repris";
  document.body.appendChild(para);
}
/* horloge */
window.addEventListener("load", horloge);
function horloge() {
  let d = new Date();
  document.getElementById("heure").innerHTML = d.toLocaleTimeString();
  setTimeout(horloge, 1000);
}
document.addEventListener('DOMContentLoaded', function () {
    const cache = document.getElementById("bouton");
    cache.addEventListener("click", cacheHorloge);
    document.getElementById("tog").style.display = "block";
    function cacheHorloge() {
        let ppara = document.getElementById("tog");
        if (ppara.style.display == "block") {
            ppara.style.display = "none";
        } else {
            ppara.style.display = "block";
        }
    }
});
/* -------------- */
let prenom = "moi c'est Gonzague";
let age = 29;
    let agec = "29";
    document.getElementById('p1').innerHTML = "type de prenom:" + typeof prenom;
    document.getElementById('p2').innerHTML = "type de age:" + typeof age;
    document.getElementById('p3').innerHTML = "type de agec:" + typeof agec;

