// Flip delle card: click su mobile, hover su desktop
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      card.classList.toggle('flipped');
    }
  });
});
