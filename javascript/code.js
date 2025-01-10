document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  var swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      scrollbar: {
          el: '.swiper-scrollbar',
      },
  });

  // Initialize AOS
  AOS.init();

  // Initialize lightGallery
  lightGallery(document.getElementById('lightgallery'), {
      selector: '.gallery-item',
      mode: 'lg-slide',
      speed: 600,
      closable: true,
      loop: true,
      escKey: true,
      keyPress: true,
      download: true,
      counter: true,
      enableDrag: true,
  });
});
