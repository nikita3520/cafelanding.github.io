// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
   tab.addEventListener('click', () => {
     document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
     tab.classList.add('active');
   });
});

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.menu-card, .review-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
