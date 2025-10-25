// 手風琴展開邏輯
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const header = card.querySelector('.card-header');
  const content = card.querySelector('.card-content');

  header.addEventListener('click', () => {
    const isOpen = content.style.display === 'block';
    document.querySelectorAll('.card-content').forEach(c => (c.style.display = 'none'));
    if (!isOpen) {
      content.style.display = 'block';
    }
  });
});
