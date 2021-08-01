const container = document.querySelector(".container");
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log(scrollTop, clientHeight, scrollHeight);
    if (scrollTop + clientHeight === scrollHeight) {
        console.log("gagné")
    }
});
