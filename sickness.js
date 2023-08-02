/**
 * Sickness.js
 */
(() => {
  setInterval(() => {
    document.querySelectorAll("body *").forEach((element) => {
      element.style.transform = `translate(${Math.random() * 2 - 1}px, ${
        Math.random() * 2 - 1
      }px)`;
    });
  }, 10);
})();
