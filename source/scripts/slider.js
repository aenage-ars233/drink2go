const sliderItems = document.querySelectorAll('.slider__item');
const nextButton = document.querySelector('.slider__control--next');
const prevButton = document.querySelector('.slider__control--prev');
const pagination = document.querySelector('.slider__pagination-list');
const paginationButtons = pagination.querySelectorAll('.slider__pagination-button');

prevButton.disabled = false;
nextButton.disabled = false;
let currentSlide = 1;

function showSlide(index) {
  sliderItems.forEach((item, i) => {
    item.classList.toggle('slider__item--active', i === index);
  });
  paginationButtons.forEach((button, i) => {
    button.classList.toggle('slider__pagination-button--active', i === index);
  });
}

nextButton.addEventListener('click', () => {
  currentSlide = currentSlide + 1;
  if (currentSlide > sliderItems.length) {
    currentSlide = 1;
  }
  showSlide(currentSlide - 1);
});

prevButton.addEventListener('click', () => {
  currentSlide = currentSlide - 1;
  if (currentSlide < 1) {
    currentSlide = sliderItems.length;
  }
  showSlide(currentSlide - 1);
});

pagination.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('slider__pagination-button')) {
    const index = Array.from(paginationButtons).indexOf(evt.target);
    currentSlide = index + 1;
    showSlide(index);
  }
});
