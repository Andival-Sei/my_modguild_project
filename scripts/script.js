// Получаем все элементы с классом "fomod__toggle"
const fomodToggle = document.getElementsByClassName("fomod__toggle");

// Добавляем обработчик события "click" для каждого элемента "fomod__toggle"
for (const toggle of fomodToggle) {
  toggle.addEventListener("click", function() {
    // Переключаем класс "fomod__toggle-active" для элемента, на который кликнули
    this.classList.toggle("fomod__toggle-active");
    // Переключаем класс "fomod__content-open" для следующего элемента после "fomod__toggle"
    const panel = this.nextElementSibling;
    panel.classList.toggle("fomod__content-open");
  });
}


// Функция для переключения слайдов
function switchSlide(currentSlide, newSlide, direction) {
  if (newSlide && newSlide.classList.contains("fomod__slide")) {
    // Убираем класс "fomod__slide-active" у текущего слайда
    currentSlide.classList.remove("fomod__slide-active");
    currentSlide.classList.add(direction === 'next' ? "fomod__slide-prev" : "fomod__slide-next");

    // Добавляем класс "fomod__slide-active" новому слайду
    newSlide.classList.add("fomod__slide-active");
    newSlide.classList.remove(direction === 'next' ? "fomod__slide-next" : "fomod__slide-prev");

    // Обновляем классы для всех слайдов
    const slides = document.getElementsByClassName("fomod__slide");
    for (let i = 0; i < slides.length; i++) {
      if (slides[i] !== currentSlide && slides[i] !== newSlide) {
        slides[i].classList.remove("fomod__slide-prev", "fomod__slide-next");
        if (i < Array.prototype.indexOf.call(slides, newSlide)) {
          slides[i].classList.add("fomod__slide-prev");
        } else if (i > Array.prototype.indexOf.call(slides, newSlide)) {
          slides[i].classList.add("fomod__slide-next");
        }
      }
    }
  }
}

// Получаем все элементы с классом "fomod__slider-next"
const nextButtons = document.getElementsByClassName("fomod__slider-next");

// Добавляем обработчик события "click" для каждого элемента "fomod__slider-next"
for (const button of nextButtons) {
  button.addEventListener("click", function() {
    // Получаем текущий активный слайд
    const currentSlide = document.querySelector(".fomod__slide-active");
    // Получаем следующий слайд
    const nextSlide = currentSlide.nextElementSibling;
    switchSlide(currentSlide, nextSlide, 'next');
  });
}

// Получаем все элементы с классом "fomod__slider-prev"
const prevButtons = document.getElementsByClassName("fomod__slider-prev");

// Добавляем обработчик события "click" для каждого элемента "fomod__slider-prev"
for (const button of prevButtons) {
  button.addEventListener("click", function() {
    // Получаем текущий активный слайд
    const currentSlide = document.querySelector(".fomod__slide-active");
    // Получаем предыдущий слайд
    const prevSlide = currentSlide.previousElementSibling;
    switchSlide(currentSlide, prevSlide, 'prev');
  });
}