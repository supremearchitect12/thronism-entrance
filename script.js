// Cursor tracking
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Pulse awakening
const pulse = document.querySelector('.pulse');
setTimeout(() => {
  pulse.style.opacity = '1';
}, 7300); // 7.3 seconds

