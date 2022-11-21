/* const forme = document.querySelector(".forme");
const pren = document.querySelector(".pren");
const nom = document.querySelector(".nom");
const nomb = document.querySelector(".nomb");
const prenom = document.querySelector("#prenom");
const nm = document.querySelector("#nom");
const nombre = document.querySelector("#nombre");
let obj = {}; */
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
/* const moye = (tab) => tab?.reduce((a, c) => a + c) / tab?.length;
class Students {
  ecole = "Kerichen";
  ville = "nantes";
  #notes=['']
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }
  set notes(v) {
    if (Array.isArray(v)) {
      this.#notes = v;
    }
  } 
  get nom_() {
    return `${this.nom} `;
  }
  static moy = 10;

  canPass() {
    return [parseInt(moye(this.#notes)), moye(this.#notes) >= Students.moy];
  }
}
class GoodStudent extends Students {
  constructor(p, n, notes) {
    super(p, n);
    this.notes = notes;
  }

  set moy(v) {
    this.moyenne = v;
  }
  get nom_() {
    return "super  " + super.nom_;
  }
  canPass() {
    return super.canPass();
  }
}
const john = new GoodStudent("john", "doe", [19, 12, 15, 8, 16]);
const eric = new Students("eric", "depoul");

eric.notes = [2, 2];
// john.notes = [19, 12, 15, 8, 16];
console.log(john.canPass());
console.log(eric.canPass());
eric.ville = "brest";

console.log(john.nom_, eric.nom_);
console.log(john);
john.moy = 674;
console.log(john.nom_, eric.nom_);
john.canPass(); */
/* 
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Saisie incorrecte");
    }
    this.width = width;
    this.height = height;
  }
  get perimeter() {
    return (this.height + this.width) * 2;
  }
  get isValid() {
    return this.height > 0 && this.width > 0;
  }
  isBiggerThan(shape) {
    return this.perimeter >= shape.perimeter;
  }
}
class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}
const saisie = (entree) => {};

try {
  const r = new Rectangle(saisie("Largeur"), saisie("Hauteur"));
  const c = new Square(saisie("Coté"));
  console.log(r, r.perimeter, r.isValid);
  console.log(c, r.perimeter, c.perimeter, c.isValid);
  console.log(c.isBiggerThan(r));
} catch (e) {
  console.log(e);
}
 */
// books
/* class Book {
  #page = 1;
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  get page() {

    return this.#page;
  }
  nextPage() {
    if (this.#page < this.pages) this.#page++;
  }
  close() {
    this.#page = 1;
  }
}

class Library {
  #books = [];
  adBook(book) {
    this.#books.push(book);
  }
  adBooks(books) {
    books.forEach((b) => this.adBook(b));
  }
  get libr() {
    return this.#books;
  }
  findBookByLetter(l) {
    const ret= this.#books.filter(bo => bo.title.at(0).toLowerCase()=== l.toLowerCase())
    return ret.map(bo => bo.title)
    
  }
}
const lib = new Library();

const b = new Book("Seigneur des Anneaux", 200);
const cb = new Book("Surface", 256);

console.log(b.page);
b.nextPage();
b.nextPage();

console.log(b.page);
lib.adBook(b);
lib.adBook(cb);
lib.adBooks([
  new Book("Read Player One", 200),
  new Book("oui oui", 40),
  new Book("Sillage", 100),
]);

console.log(lib.findBookByLetter("s")); */
/* const tab = [1, 34, 1, 45, 56, 1, 34, 4, 67, 8];
const res = tab.filter((v, i, ar) => ar.indexOf(v) === i);
const red = (tab) => tab.filter((v, i, ar) => ar.indexOf(v) === i);
console.log(res); // quickest
console.log([...new Set(tab)]); //slowest
console.log([...tab].reverse());
const [t1, , , t2, ...rest] = red([...tab]);
console.log(t1, t2, rest);
const person = {
  nom: "depoul",
  prenom: "zag",
};
const nouvPerson = { ...person, age: 22, nom: "cariou" };
const age = 19;
const message = age <= 18 ? "mineur" : "majeur";
console.log(message);

*/
/* const wait = (duree) => {
  const t = Date.now();
  while (Date.now() - t < duree) {

  }
};
console.log("bang");
setTimeout(()=>
console.log("Zuuut"),4000)
wait(2000);
console.log("boom");
 */
/* const hello = (b) => {
  let a = 1;
  return (b) => {
    a++;
    console.log(a+b)
    debugger
  };
};
const f = hello();
f(45)
f(67)
f(67)
f(0) */

/* const g= ()=>{
  let v = parseInt(Math.random() *100);
  return ()=> console.log(v)
}
let f= g()
const arr= [g(),g(),g()]
 */
/* let myName = "zagou";
printName = () => {

    console.log(myName);
  };


printName();

const fnExt=(extVar)=>{
  return function fnInt (intVar){
    const letVar = "haha"
    console.log('Var Ext: '+ extVar)
    console.log('Var Int: '+ intVar)
    console.log('let Int: '+ letVar)
  }
}
const nouvFn =fnExt('Exterieur')
nouvFn("dedans") */
/* const creeCompteur =()=>{
  let n=0
  const incremente = ()=>{
    n++;
    console.log(n)
  
  }
  return incremente
}
 let add = creeCompteur()
 console.dir(add)
add()
add() */

/* const p = new Promise((resolve, reject) => {
  resolve("zagou");
  reject("rejeté");
});

const waitM = (duree) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(duree), duree)
  );
};
const waitE = (duree) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject(duree), duree)
  );
};
// waitM(2000)
//   .then((n) => {
//     console.log(n);
//     return waitM(1000);
//   })
//   .then((n) => {
//     console.log(n);
//     return waitE(2000);
//   })
//   .catch((e) => null);

const fonctAsync = async () => {
  let res = await waitM(2000);
  console.log(`résultat ${res}`);
  res = await waitM(1000);
  console.log(`résultat ${res}`);
  res = await waitM(3000);
  console.log(`résultat ${res}`);
  res = await waitM(1000);
  console.log(`résultat ${res}`);
  return "et BOOM";
};
// fonctAsync()
//   .then((n) => {
//     console.log(n);
//     return "renvoi 2";
//   })
//   .then((n) => console.log(n));

// Promise.any([waitE(1000), waitM(2000),waitM(3000)])
//   .then(console.log)
//   .catch((n) => console.error);

// p .then((r) => {
//   console.log(r);
//   return "autre chose";
// })
// .then((n) => {console.log(n)
//   // throw new Error("perdu")
//   return " 3eme"})
//   .then((n=> console.log(n)))
//   .catch((e) => console.log("echec", e))
//   .finally(()=> console.log("ca c'est fait"))

const pr = new Promise((r) => {
  console.log("hello");
  r(36);
});
pr.then((n) => console.log(n));
 */

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users/?_limit=5&_delay=2000"),
  fetch("https://jsonplaceholder.typicode.com/posts/?_limit=3"),
])
 .then(r => console.log(r));
