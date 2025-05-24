// script.js

const cursor = document.querySelector('.cursor');
const pulse = document.querySelector('.pulse');

// Initial: Hide everything
cursor.style.opacity = '0';
pulse.style.opacity = '0';
pulse.style.visibility = 'hidden';

// Cursor tracking
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Phase 2: Golden Breath appears after 7.3 seconds
setTimeout(() => {
  pulse.style.visibility = 'visible';
  pulse.style.transition = 'opacity 6s ease';
  pulse.style.opacity = '1';
}, 7300); // 7.3 seconds

// Phase 3: Halo Cursor awakens after 14.6 seconds
setTimeout(() => {
  cursor.style.transition = 'opacity 3s ease';
  cursor.style.opacity = '1';
}, 14600); // 14.6 seconds
