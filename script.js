// Elements
const cursor = document.querySelector('.cursor');
const pulse = document.querySelector('.pulse');
const canvas = document.getElementById("dust-canvas");
const ctx = canvas.getContext("2d");

// Device check
const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Phase 1: Hide everything
if (isDesktop) {
  cursor.style.opacity = '0';
}
pulse.style.opacity = '0';
pulse.style.visibility = 'hidden';
pulse.style.animation = 'none';
canvas.style.opacity = '0';

// Cursor tracking (desktop only)
if (isDesktop) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

// Phase 2: Breath begins at 7.3s
setTimeout(() => {
  pulse.style.visibility = 'visible';
  pulse.style.opacity = '1';
  canvas.style.opacity = "1";

  pulse.animate([
    { opacity: 0 },
    { opacity: 0.2 },
    { opacity: 0.4 },
    { opacity: 0.6 },
    { opacity: 0.8 },
    { opacity: 1 }
  ], {
    duration: 30000,
    fill: 'forwards',
    easing: 'ease-in-out'
  });

  setTimeout(() => {
    pulse.style.animation = 'pulse-glow 10s infinite';
  }, 30000);

  loopDust(); // Start the golden dust
}, 7300);

// Phase 3: Cursor awakens
if (isDesktop) {
  setTimeout(() => {
    cursor.style.transition = 'opacity 3s ease';
    cursor.style.opacity = '1';
  }, 14600);
}

// Tap aura for touch devices
if (!isDesktop) {
  document.addEventListener("touchstart", function (e) {
    const touch = e.touches[0];
    const aura = document.createElement("div");
    aura.classList.add("tap-aura");
    aura.style.left = `${touch.clientX}px`;
    aura.style.top = `${touch.clientY}px`;
    document.body.appendChild(aura);
    setTimeout(() => aura.remove(), 800);
  });
}

// Golden dust logic
canvas.width = 300;
canvas.height = 300;
const particles = [];
const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.8 + 0.5,
    angle: Math.random() * Math.PI * 2,
    speed: 0.15 + Math.random() * 0.1,
  });
}

let breatheIn = true;
setInterval(() => {
  breatheIn = !breatheIn;
}, 6000); // Every 6s: in/out

function animateDust(breatheIn) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.angle += p.speed * (breatheIn ? -1 : 1);
    const r = 100 + Math.sin(p.angle * 2) * 20;
    p.x = canvas.width / 2 + Math.cos(p.angle) * r;
    p.y = canvas.height / 2 + Math.sin(p.angle) * r;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(212, 175, 55, 0.35)';
    ctx.fill();
  }
}

function loopDust() {
  animateDust(breatheIn);
  requestAnimationFrame(loopDust);
}
