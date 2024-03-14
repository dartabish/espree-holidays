import PhotoSwipeLightbox from './photoswipe/dist/photoswipe-lightbox.esm.js';

document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = [
    { path: './assets/gallery/gallery-1.jpeg', width: 2048, height: 1360 },
    { path: './assets/gallery/gallery-2.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-3.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-4.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-5.jpg', width: 3455, height: 2698 },
    { path: './assets/gallery/gallery-6.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-7.jpg', width: 2592, height: 1944 },
    { path: './assets/gallery/gallery-8.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-9.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-10.jpg', width: 4144, height: 1968 },
    { path: './assets/gallery/gallery-11.jpg', width: 4144, height: 1968 },
    { path: './assets/gallery/gallery-13.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-14.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-15.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-16.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-18.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-19.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-20.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-21.jpg', width: 3456, height: 4608 },
    { path: './assets/gallery/gallery-22.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-23.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-24.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-25.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-26.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-27.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-28.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-29.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-30.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-32.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-33.jpg', width: 4608, height: 3456 },
    { path: './assets/gallery/gallery-34.jpg', width: 4608, height: 3456 },
  ];

  function createGalleryItems(items) {
    const galleryContainer = document.getElementById('gallery-wrapper');
    items.forEach(item => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'swiper-slide gallery-slide';
      slideDiv.innerHTML = `
              <a
                href="${item.path}"
                data-pswp-width="${item.width}"
                data-pswp-height="${item.height}"
                data-cropped="true"
                target="_blank"
              >
                <img src="${item.path}" alt="Large Image" loading="lazy"/>
              </a>
    `;
      galleryContainer.appendChild(slideDiv);
    });
  }
  createGalleryItems(galleryItems);

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
});

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
  speed: 1400,
  effect: 'fade',
  crossFade: 'true',
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

const gallerySwiper = new Swiper('.gallery-swiper', {
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

backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};

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
