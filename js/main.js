const slides = document.querySelectorAll('.slider-item');
const nextBtn = document.querySelector('.arow-right-btn');
const prevBtn = document.querySelector('.arow-left-btn');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('current-slide');
      slide.style.left = '0';
    } else if (i < index) {
      slide.classList.remove('current-slide');
      slide.style.left = '-100%';
    } else {
      slide.classList.remove('current-slide');
      slide.style.left = '100%';
    }
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Ініціалізація першого слайду
showSlide(current);
