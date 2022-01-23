//test du navigateur

const browserName = (agent) => {
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "MS Edge";
    case agent.indexOf("edg/") > -1:
      return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr:
      return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      return "Chrome";
    case agent.indexOf("trident") > -1:
      return "MS IE";
    case agent.indexOf("firefox") > -1:
      return "Firefox";
    case agent.indexOf("safari") > -1:
      return "Safari";
    default:
      return "other";
  }
};
const nav = browserName(window.navigator.userAgent.toLowerCase());
console.log(nav);
//==================================================
const crole = document.querySelector(".box");
const envel = document.querySelector(".envel");
const largImg = document.querySelectorAll(".image")[0].clientWidth;
let positionG = crole.scrollLeft;
let ecart = 0;
crole.addEventListener("scroll", () => {
  ecart = crole.scrollLeft - positionG;
  //   console.log("clientWidth " + crole.clientWidth);
  //   console.log("offsetWidth " + crole.offsetWidth);
  //   console.log("scrollLeft " + crole.scrollLeft);
  //   console.log("scrollWidth " + crole.scrollWidth);
  // console.log(ecart, Math.round(ecart / crole.clientWidth));
  //   console.log(positionG)
});
// crole.addEventListener("click", () => {
  crole.scrollTo({
    left: largImg * 22,
});
const toggleFullScreen = (el) => {
  if (!document.fullscreenElement) {
    if (browserName === "Chrome") el.requestFullscreen();
    if (browserName === "Safari") el.webkitRequestFullScreen();
  } else {
    if (document.exitFullscreen) {
      if (browserName === "Chrome") document.exitFullscreen();
      if (browserName === "Safari") document.webkitCancelFullScreen();
    }
  }
};
//========toggle vers fullscreen ou non sur tous les navigfateurs
const fullscreen = (elem) => {
  if (
    !document.fullscreenElement &&
    !document.mozFullScreen &&
    !document.webkitIsFullScreen &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }
};
//==== passer en full screen par "enter"
const zagblog = () => {
  window.location.href="http://127.0.0.1:5500/Slider%202/index.html";
};
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      // fullscreen(envel);
      localStorage.setItem("data", 'Gonzague')
      alert("ca marche");
      zagblog()
    }
  },
  false
);

if (nav === "Firefox") {
  crole.setAttribute("style", "scroll-snap-type: unset");
}
