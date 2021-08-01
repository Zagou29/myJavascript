// let bonjour = document.getElementById("b1");
// let enPlus = document.getElementById("b2");
// bonjour.addEventListener("click", alerte);
// enPlus.addEventListener("click", ajout);

// function alerte() {
//   alert("Zut");
// }
// function ajout() {
//   let para = document.createElement("p");
//   para.textContent = "hé oui , je dois encore apprendre";
//   document.body.appendChild(para);
// }
// /* horloge */
// window.addEventListener("load", horloge);
// function horloge() {
//   let d = new Date();
//   document.getElementById("heure").innerHTML = d.toLocaleTimeString();
//   setTimeout(horloge, 1000);
// }
// document.addEventListener("DOMContentLoaded", function () {
//   const cache = document.getElementById("bouton");
//   cache.addEventListener("click", cacheHorloge);
//   document.getElementById("tog").style.display = "block";
//   function cacheHorloge() {
//     let ppara = document.getElementById("tog");
//     if (ppara.style.display == "block") {
//       ppara.style.display = "none";
//     } else {
//       ppara.style.display = "block";
//     }
//   }
// });
// /* -------------- */
// let prenom = "moi c'est Gonzague";
// let age = 29;
// let agec = "29";
// document.getElementById("p1").innerHTML = "p1:" + prenom;
// document.getElementById("p2").innerHTML = "p2" + age;
// document.getElementById("p3").innerHTML = "p3:" + agec;
// /* test operateurs */
// function random() {
//   let rand = Math.random() * 100;
//   return Math.round(rand);
// }
// function mult(x, y) {
//   return x + "*" + y + "=" + x * y;
// }
// function lignP(p, text) {
//   document.getElementById(p).innerHTML = text;
// }

// /* ------------------ */
// let x = 45;
// let y = -20;
// let resultat = "";
// function ligne(res) {
//   let para = document.createElement("p");
//   para.textContent = res;
//   document.body.appendChild(para);
// }
// ligne("et alors");
// let text1 = " c'est le texte de depart";
// let text0 = " la partie fixe";
// text0 = text0 + text1;
// let text2 = "un autre texte";
// let text3 = "";

// lignP("p4", text0);
// let par1 = document.getElementById("p1");
// let par2 = document.getElementById("p2");

// par1.addEventListener("click", function () {
//   lignP("p1", "oui oui");
// });
// par2.addEventListener("click", function () {
//   text3 = text0.replace(text1, text2);
//   lignP("p4", text3);
// });

// /* langage objet------------ */
// let gonzague = {
//   nom: ["Gonzague", " de Poulpiquet"],
//   adresse: "91 Keriskin 29870 Landeda",
//   age: 73,
//   mail: "gdepoulpiquet@me.com",
//   bonjour: function (p) {
//     lignP(
//       p,
//       "je suis " +
//         this.nom[0] +
//         " " +
//         this.nom[1] +
//         " et j'habite à " +
//         this.adresse +
//         " et j'ai " +
//         this.age +
//         " ans"
//     );
//   },
// };
// gonzague.bonjour("p8");
// gonzague.taille = 170;
// /* gonzague.bonjour(); */
// lignP("p5", gonzague["nom"]);

// /* constructeur */
// function User(n, a, ad, m) {
//   this.nom = n;
//   this.age = a;
//   this.adresse = ad;
//   this.mail = m;
//   this.bonjour = function (p) {
//     lignP(
//       p,
//       "je suis " +
//         this.nom[0] +
//         " " +
//         this.nom[2] +
//         " et j'habite à " +
//         this.adresse +
//         " et j'ai " +
//         this.age +
//         " ans et mon mail est " +
//         this.mail
//     );
//   };
// }

// let margot = new User(
//   ["Margot", "Fille", "Cariou"],
//   73,
//   "rue coty StNaz",
//   "margot_cariou@orange.fr"
// );
// lignP("p8", margot.mail);
// margot.bonjour("p10");
// gonzague.bonjour("p7");
// margot.valeur = "bravo";
// lignP("p8", margot.valeur);
// console.log(margot.adresse);
// /*
// let myImage = document.querySelector("iframe");
// console.log(myImage)

// myImage.addEventListener("click", function () {
//   let mySrc = myImage.getAttribute("src");
//   console.log(mySrc);

// }); */
// const bout = document.querySelector("#boule");
// console.log(bout);
// let addEventListenerPromise = (elem, method) => {
//   return new Promise((resolve, reject) => {
//     elem.addEventListener(method, resolve);
//   });
// };
// addEventListenerPromise(bout, "mouseup").then((e) => {
//   console.log(e);
//   console.log("bravo");
// });
// Promise.all([
//   Promise.resolve("test 1"),
//   Promise.resolve("test 2"),
//   Promise.resolve("test 3"),
//   Promise.resolve("test 4"),
// ]).then((messages) => {
//   console.log(messages);
// });
// // changer les entités html par leurs codes

// // & < > " '

// function convertHTML(str) {
//   let el = str.split("");

//   for (let i = 0; i < el.length; i++) {
//     switch (el[i]) {
//       case "<":
//         el[i] = "&lt;";
//         break;

//       case "&":
//         el[i] = "&amp;";

//         break;

//       case ">":
//         el[i] = "&gt;";

//         break;

//       case '"':
//         el[i] = "&quot;";
//         break;

//       case "'":
//         el[i] = "&apos;";
//         break;
//     }
//   }

//   el = el.join("");
//   return el;
// }

// console.log(convertHTML("Dolce <&>Gabbana"));
// function convertHTMLx(str) {
//   let htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };

//   return str
//     .split("")
//     .map((el) => {
//       return htmlEntities[el] || el;
//     })
//     .join("");
// }

// console.log(convertHTMLx("Dolce & > > >Gabbana"));

// const mergeSort = (array) => {
//   console.log(array);
//   // tableau divisé en deux
//   // the recursive stop condition !
//   if (array.length > 1) {
//     // trouver le milieu du tableau
//     const milieu = Math.floor(array.length / 2);
//     // coté gauche
//     const coteGauche = array.slice(0, milieu);
//     // appelle de facon recursive MergeSort de gauche
//     // coté droit

//     const coteDroit = array.slice(milieu);
//     // appelle de facon recursive MergeSort de gauche

//     mergeSort(coteGauche);
//     // puis de droite
//     mergeSort(coteDroit);
//     // initialiser les index
//     let indexGauche = 0,
//       indexDroit = 0,
//       globalIndex = 0;
//     // boucle jusqu'à la fin des cotés droits et gauches
//     // on ne compare pas s'il n'y a qu'un seul element
//     while (indexGauche < coteGauche.length && indexDroit < coteDroit.length) {
//       // actual sort comparaison is here
//       // if the left element is smaller its should be first in the array
//       // else the right element should be first
//       // move indexes at each steps
//       if (coteGauche[indexGauche] < coteDroit[indexDroit]) {
//         array[globalIndex] = coteGauche[indexGauche];
//         indexGauche++;
//       } else {
//         array[globalIndex] = coteDroit[indexDroit];
//         indexDroit++;
//       }
//       globalIndex++;
//     }
//     // making sure that any element was not left behind during the process
//     while (indexGauche < coteGauche.length) {
//       array[globalIndex] = coteGauche[indexGauche];
//       indexGauche++;
//       globalIndex++;
//     }
//     while (indexDroit < coteDroit.length) {
//       array[globalIndex] = coteDroit[indexDroit];
//       indexDroit++;
//       globalIndex++;
//     }
//   }
//   return array;
// };
// console.log(mergeSort([1, 56, 67, 6, 90, 100, 45, 3, 4, 4, 56, 789, 43]));
// [1986, 1998, 2006, 2018, 2020]
//====================================

function quickSort(arr, deb, fin) {
  if (deb >= fin) {
    return;
  }
  /* prend la dernière valeur, et isole à gauche tous les chiffres plus faibles et a gauche tous les plus grands et retourne l'index de cette valeur pivot */
  let index = partition(arr, deb, fin);
  /*refait la meme chose à gauche, puis a  doite*/
  quickSort(arr, index + 1, fin);
  quickSort(arr, deb, index - 1);
}

function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const arr = [
  45, 98, 32, 67, 4, 30, 87, 45, 34, 91, 100, 56, 78, 34, 12, 31, 342,
];

console.log(arr);
quickSort(arr, 0, arr.length - 1);

console.log(arr);
