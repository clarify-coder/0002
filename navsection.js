// nav men-buttons
function toggleMenu() {
  document.querySelector('.nav-link-btn-wapper').classList.toggle('active');
}
// nav menoff after click link
const navMenu = document.querySelector('.nav-link-btn-wapper');

navMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    navMenu.classList.remove('active');
  }
});
// menu filter buttons
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.filter-menu-button button');
  const cards = document.querySelectorAll('.menu-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      // 1️⃣ Handle active state
      buttons.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      // 2️⃣ Handle filtering
      const category = this.dataset.category;

      cards.forEach((card) => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
