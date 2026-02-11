const texts = document.querySelectorAll(".fade-text");
const clickArea = document.getElementById("clickArea");

let index = 0;

clickArea.addEventListener("click", () => {
  texts[index].classList.remove("active");

  index = (index + 1) % texts.length;

  texts[index].classList.add("active");
});