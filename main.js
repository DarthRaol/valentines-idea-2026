    // 🔴 SET THE CORRECT DATE HERE (YYYY-MM-DD)
    const EXPECTED_DATE = "2026-12-21";
const bgMusic = document.getElementById("bgMusic");
    const dateInput = document.getElementById("dateInput");
    const confirmBtn = document.getElementById("confirmBtn");

    dateInput.addEventListener("change", () => {
        if (dateInput.value === EXPECTED_DATE) {
            confirmBtn.style.display = "inline-block";
        } else {
            confirmBtn.style.display = "none";
        }
    });
const precheck = document.getElementById("precheck");
const postcheck = document.getElementById("postcheck");
const texts = document.querySelectorAll(".fade-text");

postcheck.classList.add("hidden"); // start hidden

confirmBtn.addEventListener("click", () => {
    bgMusic.play().catch(err => {
    console.log("Playback failed:", err);
  });
  bgMusic.volume = 0.5;
  // 1. Disable precheck
  precheck.classList.add("hidden");
document.getElementById("checking").style.display = "none";
document.getElementById("text-sequence").style.display = "block";

  // 2. Fade in postcheck (slightly delayed)
  setTimeout(() => {
    postcheck.classList.remove("hidden");
    postcheck.classList.add("visible");
  },600);

  // 3. Text sequence
  let index = 0;
function showNextText() {
  // fade out previous
  if (index > 0) {
    texts[index - 1].classList.remove("active");
  }

  // show next
  if (index < texts.length) {
    texts[index].classList.add("active");
    index++;
    setTimeout(showNextText, 4000);
  } else {
    // ✅ AFTER ALL TEXTS FINISH
setTimeout(() => {
  document.getElementById("text-sequence").classList.add("hidden");

  finalScreen.classList.add("show");
  startBackgroundLoop(); // 🔥 START LOOP HERE
}, 5000);
  }
}

showNextText();


  // Optional: disable button permanently
  confirmBtn.disabled = true;
  confirmBtn.style.opacity = "0.5";
});


const finalScreen = document.getElementById("valentine-final");

const images = [
  "img1.jpeg"
];

let bgIndex = 0;

function startBackgroundLoop() {
  finalScreen.style.backgroundImage = `url('${images[bgIndex]}')`;


}