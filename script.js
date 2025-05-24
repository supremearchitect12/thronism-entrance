document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("golden-cursor");
  document.body.appendChild(cursor);

  // Desktop cursor tracking
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("mousemove", function (e) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  // Mobile tap aura
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
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
});
