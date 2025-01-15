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

// Получаем элементы галереи и кнопок управления
const gallery = document.querySelector('.fomod__gallery');
const pages = document.querySelectorAll('.fomod__page');
const indicators = document.querySelectorAll('.gallery__indicator');
const prevButton = document.querySelector('.gallery__prev');
const nextButton = document.querySelector('.gallery__next');

// Инициализируем текущий индекс страницы
let currentIndex = 0;

// Вызываем функцию для установки начального состояния галереи
updateGallery(currentIndex);

/**
 * Функция для обновления состояния галереи
 * @param {number} index - текущий индекс активной страницы
 */
function updateGallery(index) {
  // Перебираем все страницы и обновляем их классы
  pages.forEach((page, i) => {
    // Устанавливаем класс "fomod__page-active" для активной страницы
    page.classList.toggle('fomod__page-active', i === index);
  });

  // Перебираем все индикаторы и обновляем их классы
  indicators.forEach((indicator, i) => {
    // Устанавливаем класс "gallery__indicator-active" для активного индикатора
    indicator.classList.toggle('gallery__indicator-active', i === index);
  });

  // Скрываем кнопку "prev" на первой странице и показываем на остальных
  if (index === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  // Скрываем кнопку "next" на последней странице и показываем на остальных
  if (index === pages.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

// Добавляем обработчик события "click" для кнопки "prev"
prevButton.addEventListener('click', () => {
  // Уменьшаем текущий индекс и обновляем галерею
  currentIndex = (currentIndex - 1 + pages.length) % pages.length;
  updateGallery(currentIndex);
});

// Добавляем обработчик события "click" для кнопки "next"
nextButton.addEventListener('click', () => {
  // Увеличиваем текущий индекс и обновляем галерею
  currentIndex = (currentIndex + 1) % pages.length;
  updateGallery(currentIndex);
});

// Добавляем обработчик события "click" для каждого индикатора
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    // Устанавливаем текущий индекс на индекс индикатора и обновляем галерею
    currentIndex = i;
    updateGallery(currentIndex);
  });
});


// jQuery(document).ready(function ($) {
//   var slideCount = $('#fomod__content ul li').length;
//   var slideWidth = $('#fomod__content ul li').width();
//   var slideHeight = $('#fomod__content ul li').height();
//   var sliderUlWidth = slideCount * slideWidth;

//   $('#fomod__content').css({ width: slideWidth, height: slideHeight });
//   $('#fomod__content ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });
//   $('#fomod__content ul li:last-child').prependTo('#fomod__content ul');

//   function moveLeft() {
//     $('#fomod__content ul').animate({
//       left: +slideWidth
//     }, 200, function () {
//       $('#fomod__content ul li:last-child').prependTo('#fomod__content ul');
//       $('#fomod__content ul').css('left', '');
//     });
//   }

//   function moveRight() {
//     $('#fomod__content ul').animate({
//       left: -slideWidth
//     }, 200, function () {
//       $('#fomod__content ul li:first-child').appendTo('#fomod__content ul');
//       $('#fomod__content ul').css('left', '');
//     });
//   }

//   $('button.gallery__prev').click(function () {
//     if ($('#fomod__content ul li:first-child').is(':first-child')) {
//       return false; // Останавливаем, если это первый слайд
//     }
//     moveLeft();
//   });

//   $('button.gallery__next').click(function () {
//     if ($('#fomod__content ul li:last-child').is(':last-child')) {
//       return false; // Останавливаем, если это последний слайд
//     }
//     moveRight();
//   });
// });

jQuery(document).ready(function ($) {
  const pages = $('.fomod__page');
  const prevButton = $('.gallery__prev');
  const nextButton = $('.gallery__next');
  const indicators = $('.gallery__indicator');
  let currentIndex = 0;

  function updateGallery(index) {
    pages.removeClass('fomod__page-active fomod__page-next fomod__page-prev fomod__page-hidden');
    indicators.removeClass('gallery__indicator-active');

    pages.each(function (i) {
      if (i === index) {
        $(this).addClass('fomod__page-active');
      } else if (i === index - 1) {
        $(this).addClass('fomod__page-prev');
      } else if (i === index + 1) {
        $(this).addClass('fomod__page-next');
      } else {
        $(this).addClass('fomod__page-hidden');
      }
    });

    indicators.eq(index).addClass('gallery__indicator-active');

    prevButton.toggle(index > 0);
    nextButton.toggle(index < pages.length - 1);
  }

  prevButton.click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery(currentIndex);
    }
  });

  nextButton.click(function () {
    if (currentIndex < pages.length - 1) {
      currentIndex++;
      updateGallery(currentIndex);
    }
  });

  indicators.click(function () {
    const index = $(this).data('index');
    currentIndex = index;
    updateGallery(currentIndex);
  });

  updateGallery(currentIndex);
});