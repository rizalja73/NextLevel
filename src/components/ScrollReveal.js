// src/components/ScrollReveal.js
export function initScrollReveal() {
  const elements = document.querySelectorAll('section, footer');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(el => observer.observe(el));

  // Make hero immediately visible (above fold)
  const hero = document.getElementById('hero');
  if (hero) hero.classList.add('visible');
}
