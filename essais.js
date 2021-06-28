let bonjour = document.getElementById("b1");
let enPlus = document.getElementById("b2");
bonjour.addEventListener("click", alerte);
enPlus.addEventListener("click", ajout);

function alerte() {
  alert("Zut");
}
function ajout() {
  let para = document.createElement("p");
  para.textContent = "hé oui , je dois encore apprendre";
  document.body.appendChild(para);
}
/* horloge */
window.addEventListener("load", horloge);
function horloge() {
  let d = new Date();
  document.getElementById("heure").innerHTML = d.toLocaleTimeString();
  setTimeout(horloge, 1000);
}
document.addEventListener("DOMContentLoaded", function () {
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
document.getElementById("p1").innerHTML = "p1:" + prenom;
document.getElementById("p2").innerHTML = "p2" + age;
document.getElementById("p3").innerHTML = "p3:" + agec;
/* test operateurs */
function random() {
  let rand = Math.random() * 100;
  return Math.round(rand);
}
function mult(x, y) {
  return x + "*" + y + "=" + x * y;
}
function lignP(p, text) {
  document.getElementById(p).innerHTML = text;
}

/* ------------------ */
let x = 45;
let y = -20;
let resultat = "";
function ligne(res) {
  let para = document.createElement("p");
  para.textContent = res;
  document.body.appendChild(para);
}
ligne("et alors");
let text1 = " c'est le texte de depart";
let text0 = " la partie fixe";
text0 = text0 + text1;
let text2 = "un autre texte";
let text3 = "";

lignP("p4", text0);
let par1 = document.getElementById("p1");
let par2 = document.getElementById("p2");

par1.addEventListener("click", function () {
  lignP("p1", "oui oui");
});
par2.addEventListener("click", function () {
  text3 = text0.replace(text1, text2);
  lignP("p4", text3);
});

/* langage objet------------ */
let gonzague = {
  nom: ["Gonzague", " de Poulpiquet"],
  adresse: "91 Keriskin 29870 Landeda",
  age: 73,
  mail: "gdepoulpiquet@me.com",
  bonjour: function (p) {
    lignP(
      p,
      "je suis " +
        this.nom[0] +
        " " +
        this.nom[1] +
        " et j'habite à " +
        this.adresse +
        " et j'ai " +
        this.age +
        " ans"
    );
  },
};
gonzague.bonjour("p8");
gonzague.taille = 170;
/* gonzague.bonjour(); */
lignP("p5", gonzague["nom"]);

/* constructeur */
function User(n, a, ad, m) {
  this.nom = n;
  this.age = a;
  this.adresse = ad;
  this.mail = m;
  this.bonjour = function (p) {
    lignP(
      p,
      "je suis " +
        this.nom[0] +
        " " +
        this.nom[2] +
        " et j'habite à " +
        this.adresse +
        " et j'ai " +
        this.age +
        " ans et mon mail est " +
        this.mail
    );
  };
}

let margot = new User(
  ["Margot", "Fille", "Cariou"],
  73,
  "rue coty StNaz",
  "margot_cariou@orange.fr"
);
lignP("p8", margot.mail);
margot.bonjour("p10");
gonzague.bonjour('p7')
margot.valeur = "bravo";
lignP('p8', margot.valeur)
console.log(margot.adresse)
/* 
let myImage = document.querySelector("iframe");
console.log(myImage)

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  console.log(mySrc);
  
}); */
