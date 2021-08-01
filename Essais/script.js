const elem= document.createElement("strong")
elem.innerText= "Salut moi"
document.body.appendChild(elem);
console.log(elem)

const ligneId = document.getElementById("idee")
ligneId.style.color = "green"
const lignesClass = document.getElementsByClassName("clas")

lignesClass[0].style.color = "red"
 lignesClass[2].style.color= "blue"

console.log(ligneId)
console.log(lignesClass[0])
const divData = document.querySelectorAll('.clas')
console.log(divData)
divData.forEach(el => (el.style.color = "brown"))
const divclas = document.querySelector('.clas')
let haut =divclas.style.height = 50
console.log(haut)
divclas.style.height = haut + "vw"
haut = haut * 4 / 3
console.log(haut)

divclas.style.width = haut + "vw"
