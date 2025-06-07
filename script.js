// script.js

// Elements
const cursor = document.querySelector('.cursor');
const pulse = document.querySelector('.pulse');

// Desktop check
const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Phase 1: Hide all initially
if (isDesktop) {
  cursor.style.opacity = '0';
}
pulse.style.opacity = '0';
pulse.style.visibility = 'hidden';
pulse.style.animation = 'none';

// Cursor tracking (only desktop)
if (isDesktop) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

// Phase 2: Breath appears after 7.3s
setTimeout(() => {
  pulse.style.visibility = 'visible';
  pulse.style.opacity = '1';
  pulse.style.transition = 'none';
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
}, 7300);

// Phase 3: Cursor awakens after 14.6s (desktop only)
if (isDesktop) {
  setTimeout(() => {
    cursor.style.transition = 'opacity 3s ease';
    cursor.style.opacity = '1';
  }, 14600);
}

// Mobile/Tablet: Tap Aura
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
