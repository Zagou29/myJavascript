// Load the IFrame Player API code asynchronously.
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
let maVideo = "4zmG9hG7mWs";
let player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    videoId: maVideo,
    playerVars: {
      modestbranding: 1,
      rel: 0,
      /* fs=1: pas de full screen */
      fs: 0,
    },
  });
}
 const boite = document.querySelector('#ytplayer');
 let styles = getComputedStyle(boite)
 let larg = styles.width
// console.log(larg)
// larg = larg.replace('px', '')
// console.log(larg)
// let haut = styles.height
// haut = haut.replace('px', '')
// console.log(haut).addEventListener('click')
// console.log(larg / haut)
// const envel = document.querySelector('.envelop')

// styl = getComputedStyle(envel)
// console.log(styl.maxWidth)
// console.log(styl.width)

// const boit = document.querySelector('.boite')
// boit.addEventListener('click', () => {
//   boit.classList.toggle('padd')
// })
// // boit.classList.add('padd')
// boit.classList.remove('padd')
const bouton = document.querySelector("#but");
console.log(bouton);
bouton.addEventListener("click", () => {
  boite.style.width = 50
  console.log(larg)

});
