const header = window.document.getElementById("section-header")
const main = window.document.getElementById("main")
const scroll = window.scrollY;

window.addEventListener('mousemove', (event) => {
  var pos = event.clientY;
  if (scroll > 380 && ((pos >= 0 && pos < 100 && window.innerWidth < 1080) || (pos >= 0 && pos < 140 && window.innerWidth > 1080))) {
    header.style.position = "fixed !important";
    main.style.marginTop = window.innerWidth < 1080 ? "76px !important" : "101px !important";
  } else {
    header.style.position = "relative !important";
    main.style.marginTop = "0px !important";
  }
})