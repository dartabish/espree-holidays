import PhotoSwipeLightbox from './photoswipe/dist/photoswipe-lightbox.esm.js';

const headerSwiper = new Swiper('.header-swiper', {
  loop: true,
  rewind: true,
  navigation: {
    nextEl: '.header-button-next',
    prevEl: '.header-button-prev',
  },
  autoplay: {
    delay: 2500,
  },
  speed: 1000,
  effect: 'fade',
});

const tdSwiper = new Swiper('.td-swiper', {
  rewind: true,
  navigation: {
    nextEl: '.td-button-next',
    prevEl: '.td-button-prev',
  },

  speed: 700,
  spaceBetween: 25,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

/* Back to top button toggle functionality */
const backToTopBtn = document.getElementById('myBtn');
function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    backToTopBtn.style.opacity = '1';
  } else {
    backToTopBtn.style.opacity = '0';
  }
}

/* Back To Top button functionality */ backToTopBtn.addEventListener(
  'click',
  () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
);

window.onscroll = function () {
  scrollFunction();
};

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  zoom: false,
  tapAction: 'close',
  showHideAnimationType: 'zoom',
  closeAnimationDuration: '0000',
  loop: false,

  pswpModule: () => import('./photoswipe/dist/photoswipe.esm.js'),
});
lightbox.init();

var gallerySwiper = new Swiper('.gallery-swiper', {
  rewind: true,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  pagination: {
    el: '.gallery-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    560: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

function updateDataAttribute() {
  const element = document.querySelector('.home-link');

  if (window.innerWidth <= 1200) {
    element.setAttribute('data-bs-dismiss', 'offcanvas');
  } else {
    element.removeAttribute('data-bs-dismiss');
  }
}
updateDataAttribute();

window.addEventListener('resize', updateDataAttribute);
