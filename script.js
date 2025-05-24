// script.js

// Cursor tracking
const cursor = document.querySelector('.cursor');
const pulse = document.querySelector('.pulse');

// Hide cursor during void
cursor.style.opacity = '0';

// Cursor follows after awakening
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Pulse + Cursor awaken after 30 seconds
setTimeout(() => {
  pulse.style.opacity = '1';
  cursor.style.opacity = '1';
}, 30000); // 30 seconds
