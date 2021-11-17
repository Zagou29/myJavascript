const box = document.querySelector("#box")
const cont = document.querySelector(".container")
const callB = function (entries) {
     console.log(entries[0])
 }
const observer = new IntersectionObserver(callB, {
    threshold: [0, 1],
    rootMargin: "20px" 
})
observer.observe(box)