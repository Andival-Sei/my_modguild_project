const fomodToggle = document.getElementsByClassName("fomod__toggle");

for (const toggle of fomodToggle) {
  toggle.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.classList.toggle("open");
  });
}


const gallery = document.querySelector('.fomod__gallery');
const pages = document.querySelectorAll('.fomod__page');
const indicators = document.querySelectorAll('.gallery__indicator');
const prevButton = document.querySelector('.gallery__prev');
const nextButton = document.querySelector('.gallery__next');

let currentIndex = 0;

function updateGallery(index) {
  pages.forEach((page, i) => {
    // Изменено переключение класса на 'fomod__page-active'
    page.classList.toggle('fomod__page-active', i === index);
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('gallery__indicator-active', i === index);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + pages.length) % pages.length;
  updateGallery(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % pages.length;
  updateGallery(currentIndex);
});

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    updateGallery(currentIndex);
  });
});