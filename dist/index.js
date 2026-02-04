// =======================
// MATRIX BACKGROUND
// =======================
const canvas = document.querySelector("#matrix-background");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0, 213, 190, 0.3)";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = String.fromCharCode(Math.random() * 128);
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// =======================
// COUNTDOWN LOGIC
// =======================

// Month is 0-indexed!! (Sed :( 
const targetDate = Date.UTC(2026, 3, 4, 0, 0);

const daysEl = document.getElementById("countdown-days");
const hoursEl = document.getElementById("countdown-hours");
const minutesEl = document.getElementById("countdown-minutes");
const secondsEl = document.getElementById("countdown-seconds");
const cta = document.getElementById("cta-text");

let intervalId;

function updateCountdown() {
  const difference = targetDate - Date.now();

  if (difference <= 0) {
    clearInterval(intervalId);

    daysEl.textContent = 0;
    hoursEl.textContent = 0;
    minutesEl.textContent = 0;
    secondsEl.textContent = 0;

    cta.textContent = "Breach CTF 2026 has Started!";
    return;
  }

  cta.textContent = "Register for Breach CTF 2026 Now!";

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
updateCountdown();
intervalId = setInterval(updateCountdown, 1000);
