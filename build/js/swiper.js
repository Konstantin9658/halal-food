// Swiper

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 72,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    }
  }
});

// const swiper2 = new Swiper('.swiper-2', {
//   init: false,
//   navigation: {
//     nextEl: '.swiper-button-next-2',
//     prevEl: '.swiper-button-prev-2',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     }
//   }
// });

let mql = window.matchMedia('(max-width: 767px)');

window.addEventListener('resize', checkViewport);
window.addEventListener('load', checkViewport);

function checkViewport() {
  if (mql.matches) {
    var swiper2 = new Swiper('.swiper-2', {
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        }
      }
    });
  } else {
    // swiper2.update();
    swiper2.disable();
  }
}
