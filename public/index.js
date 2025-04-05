const canvas = document.querySelector("#matrix-background");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const columns = canvas.width / 20;
const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0, 213, 190, 0.3)";
  ctx.font = "15px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(Math.random() * 128);
    ctx.fillText(text, i * 20, drops[i] * 20);

    if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

const targetDate = Date.UTC(2025, 3, 5, 2, 30);
function calculateTimeLeft() {
  const difference = targetDate - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

function updateCountdown() {
  const timeLeft = calculateTimeLeft();

  document.querySelector("#countdown-days").textContent = timeLeft.days;
  document.querySelector("#countdown-hours").textContent = timeLeft.hours;
  document.querySelector("#countdown-minutes").textContent = timeLeft.minutes;
  document.querySelector("#countdown-seconds").textContent = timeLeft.seconds;
}

// setInterval(updateCountdown, 1000);
