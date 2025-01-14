document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  var swiper = new Swiper('.swiper1', {
      direction: 'horizontal',
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper1-button-next',
          prevEl: '.swiper1-button-prev',
      },
      
  });

  // Initialize Swiper Comment
  var swiperComment = new Swiper(".swiper-comment", {
    effect: "coverflow",
    navigation: {
      nextEl: ".swiper-comment-next",
      prevEl: ".swiper-comment-prev",
    },
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
   
    slideToClickedSlide: true,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
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


let timeout;
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("close-btn");
let continueBtn = document.getElementById("continue-btn");

// Check if popup has been shown before using localStorage
/*if (!localStorage.getItem("popupShown")) {
  window.addEventListener("scroll", function() {
    clearTimeout(timeout);
    timeout = setTimeout(showPopup, 10000);
  });
}*/

window.addEventListener("scroll", function() {
  clearTimeout(timeout);
  timeout = setTimeout(showPopup, 30000);
});

function showPopup() {
  popup.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling
}

closeBtn.addEventListener("click", closePopup);
continueBtn.addEventListener("click", closePopup);

function closePopup() {
  popup.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling again
  localStorage.setItem("popupShown", "true"); // Set flag in localStorage to indicate popup has been shown
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
