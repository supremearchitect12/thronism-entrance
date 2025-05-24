// script.js

const cursor = document.querySelector('.cursor');
const pulse = document.querySelector('.pulse');

// Initial: Hide everything
cursor.style.opacity = '0';
pulse.style.opacity = '0';
pulse.style.visibility = 'hidden';
pulse.style.animation = 'none';

// Cursor tracking
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Phase 2: Golden Breath appears after 7.3 seconds, extremely slowly
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
    duration: 30000, // 30s fade-in
    fill: 'forwards',
    easing: 'ease-in-out'
  });

  // After fade-in completes, resume breathing
  setTimeout(() => {
    pulse.style.animation = 'pulse-glow 10s infinite';
  }, 30000);
}, 7300); // Start after 7.3s

// Phase 3: Halo Cursor awakens after 14.6 seconds
setTimeout(() => {
  cursor.style.transition = 'opacity 3s ease';
  cursor.style.opacity = '1';
}, 14600);
