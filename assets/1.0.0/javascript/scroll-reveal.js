window.sr = ScrollReveal();

// Add class to <html> if ScrollReveal is supported
if (sr.isSupported()) {
  document.documentElement.classList.add('sr');
}

sr.reveal('.scroll-reveal', { duration: 1000 });
sr.reveal('.scroll-reveal-1', { duration: 1000, delay: 150 });
sr.reveal('.scroll-reveal-2', { duration: 1000, delay: 200 });
sr.reveal('.scroll-reveal-3', { duration: 1000, delay: 350 });
