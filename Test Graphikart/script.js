const forme = document.querySelector(".forme");
const pren = document.querySelector(".pren");
const nom = document.querySelector(".nom");
const nomb = document.querySelector(".nomb");
const prenom = document.querySelector("#prenom");
const nm = document.querySelector("#nom");
const nombre = document.querySelector("#nombre");
let obj = {};
// const handleForm = (e) => {
//   // e.preventDefault();
//   console.log("forme");
//  e.stopPropagation();
//   const formdata = new FormData(forme);
//   // obj.push (Object.Entries(formdata));
//   pren.textContent = Object.fromEntries(formdata).prenom;
//   nom.textContent = Object.fromEntries(formdata).nom;
//   nomb.textContent = Object.fromEntries(formdata).nombre;
//   prenom.value = "";
//   nm.value = "";
//   nombre.value = null;
//   e.preventDefault();
//   obj.assign(obj,Object.fromEntries(formdata))
//   console.log(obj);

// };

// document
//   .querySelector("body")
//   .addEventListener("click", (e) => console.log("body"));
// forme.addEventListener("submit", handleForm);
/* tri et moyenne---------------------- */
/*const sortedStudents = [
  { name: "Tom", grades: [1, 3, 5, 9, 2, 7] },
  { name: "Jack", grades: [20, 4, 18, 10, 14, 12] },
  { name: "Ana", grades: [11, 14, 3, 14, 12, 14] },
  { name: "Sara", grades: [10, 12, 14, 15, 14, 19] },
];
/* fonction moyenne */
//const moye = (tab) => tab.grades.reduce((a, c) => a + c) / tab.grades.length;
/* trier croissant des notes  */
//sortedStudents.map((el) => el.grades.sort((a, b) => a - b));
/* rajouter la moyenne dans le tableau d'eleves */
//sortedStudents.forEach((tab) => (tab.moyenne = moye(tab)));
/* tri decroissant des eleves*/
//sortedStudents.sort((a, b) => moye(b) - moye(a));
////console.log(sortedStudents);
/*const formatEtud = (e) =>
 console.log(
    ` eleve ${e.name} avec une moyenne de ${e.moyenne}, min :${Math.min(...e.grades)} et max: ${Math.max(...e.grades)}`
  );
for (let i = 0; i < 3; i++) formatEtud(sortedStudents[i]);

/* ---- --------------------- */

// let mess=""
// const year = 2022
// const birthday= prompt("quand etes vous né")
// const age= year-birthday
// mess=`allez voir matrix et vous avez ${age} ans`;
// if (age <18) mess =`allez voir les films pour 14ans et vous avez ${age} ans`
// if (age <13) mess=`allez voir un film pour bébés et vous avez ${age} ans`
// console.log(mess)

// const a = prompt("A ?");
// const b = prompt("B ?");
// if (isNaN(a) || isNaN(b)) {
//   console.log("pas un nombre");
// } else console.log(a * b > 0 ? "positif" : "negatif");

// const canDrive = (age, pays) => {
//   if (pays === "") return "saisissez un nom de pays";
//   pays = pays.toLowerCase();

//   if (isNaN(age) || (pays !== "fr") & (pays !== "us"))
//     return "age n'est pas un nombre le pays n'est pas correct";
//   if ((age > 18 && pays === "fr") || (age > 16 && pays === "us"))
//     return "vous pouvez conduire";
//   else return "vous ne pouvez pas conduire";
// };

// let age = prompt("Age ?") * 1;
// let pays = prompt("pays ?");
// alert(canDrive(age, pays));

// console.log(isPair(15675, (n)=>{alert(n)}));

// const isright = (n, nb) => n === nb;
// const gues = Math.floor(Math.random() * 11);
// console.log(gues);
// const guess = () => prompt("deviner un nombre entre 0 et 10 ?") * 1;

// for (i = 1; i < 4; i++) {
//   if (isright(guess(), gues)) {
//     alert("gagné");
//     break;
//   }else  if(i===3)  alert("perdu")
// }/
/* nombre premier */
/* const isPremierBH = (x) => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return i;
  }
  return "premier";
};
console.log(isPremierBH(126));
const isPremierHB = (x) => {
  let z = 0;
  for (let n = x - 1; n > 1; n--) {
    if (x % n === 0) return z;
    z++;
  }
  return "premier" + z;
};
console.log(isPremierHB(126));

/* is palindrome */
/* const words = {
  Kayak: true,
  laval: true,
  bonjour: false,
};

const isPalindrome = (chaine) =>
  chaine.toLowerCase().split("").reverse().join("") === chaine.toLowerCase();

console.log(isPalindrome("KaYak")); */
/* trier les mots d'une phrase par frequence */
/* const phrase =
  "vous savez, que je ne suis pas celui que vous pensez, et que je ne serais pas conscient de tout cela";
const mots = phrase.toLowerCase().replaceAll(",", "").split(" ");
console.log(mots);
const freq = {};
mots.forEach((mot) => {
  if (mot !== "") {
    freq[mot] ? freq[mot]++ : (freq[mot] = 1);
  }
});
console.log(freq);
const tabFreq = [];
for (let k in freq) {
  tabFreq.push({ mot: k, nb: freq[k] });
}

tabFreq.sort((a, b) => b.nb - a.nb);
console.log(tabFreq); */

/* const a= {a : 2} 
console.log(a) */
const moye = (tab) => tab?.reduce((a, c) => a + c) / tab?.length;
class Students {
  ecole = "Kerichen";
  ville = "nantes";
  constructor(prenom, nom) {
    this.surname = prenom;
    this.name = nom;
  }
  set notes (v) {
    if (Array.isArray(v)) {this._notes = v;}
  }
  get nom(){
    return `${this.surname}`
  }
  canPass() {
    return moye(this._notes);
  }
}
const john = new Students("john", "doe");
const eric = new Students("eric", "depoul");

eric.notes = [12, 10, 14];
john.notes = [19, 12];
console.log(john.canPass());
console.log(eric.canPass());
eric.ville = "brest";
eric.name
