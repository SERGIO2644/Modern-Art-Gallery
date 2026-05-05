const revealItems = document.querySelectorAll('.gallery-grid > *, .location-content > *');

if ('IntersectionObserver' in window) {
  revealItems.forEach((item) => item.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}
