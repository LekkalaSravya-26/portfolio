// Simple scroll animation 
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if (position < screen - 100) {
      el.style.opacity = 1;
    }
  });
});
