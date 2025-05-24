// script.js

const cursor = document.querySelector('.cursor');
const pulse = document.querySelector('.pulse');

// Initial: Hide everything
cursor.style.opacity = '0';
pulse.style.opacity = '0';

// 1st Phase: Black Void (0 - 7.3s)
// Nothing visible

// 2nd Phase: Golden Breath awakens (after 7.3s)
setTimeout(() => {
  pulse.style.transition = 'opacity 6s ease';
  pulse.style.opacity = '1';
}, 7300); // Trigger breath after 7.3 seconds

// 3rd Phase: Halo Cursor awakens (after 14.6s)
setTimeout(() => {
  cursor.style.transition = 'opacity 3s ease';
  cursor.style.opacity = '1';
}, 14600); // Trigger halo after 14.6 seconds

// Cursor tracking
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
