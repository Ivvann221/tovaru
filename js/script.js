/////////
document.getElementById('burger').addEventListener('click', function() {
  this.classList.toggle('active'); // Додає/забирає клас для анімації бургера
  document.getElementById('submenu').classList.toggle('active'); // Показує/приховує меню
});

///////
$(document).ready(function(){
  $('.coffee__slider').slick({
    prevArrow: $('.slick-prevv'), // Власна стрілка "назад"
    nextArrow: $('.slick-nextv'), // Власна стрілка "вперед"
    infinite: true,     // Бескінечне прокручування
    speed: 300,         // Швидкість анімації
    slidesToShow: 4,    // Кількість слайдів, що показуються одночасно
    slidesToScroll: 1,  // Кількість слайдів, які прокручуються одночасно
    // autoplay: true, // Автоматичне прокручування
    autoplaySpeed: 4000,
    responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3 // Для екранів до 1200px показувати 2 слайди
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2 // Для планшетів і мобільних показувати по 1 слайду
          }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow:  1// Для планшетів і мобільних показувати по 1 слайду
        }
    }
  ] // Швидкість автоматичного прокручування (2 секунди)
  });
});
$(document).ready(function(){
  $('.washing__slider').slick({
    prevArrow: $('.slick-prev'), // Власна стрілка "назад"
    nextArrow: $('.slick-next'), // Власна стрілка "вперед"
    infinite: true,     // Бескінечне прокручування
    speed: 300,         // Швидкість анімації
    slidesToShow: 4,    // Кількість слайдів, що показуються одночасно
    slidesToScroll: 1,  // Кількість слайдів, які прокручуються одночасно
    // autoplay: true, // Автоматичне прокручування
    autoplaySpeed: 5000, // Швидкість автоматичного прокручування (2 секунди)
    responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3 // Для екранів до 1200px показувати 2 слайди
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2 // Для планшетів і мобільних показувати по 1 слайду
          }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 1 // Для планшетів і мобільних показувати по 1 слайду
        }
    }
  ]

  });
});

//////////////////////

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('d-none');
        });

        // Remove 'active' class from all tabs
        tabs.forEach(t => {
            t.classList.remove('active');
        });

        // Show the clicked tab content and mark the clicked tab as active
        document.getElementById(tabId).classList.remove('d-none');
        tab.classList.add('active');
    });
});