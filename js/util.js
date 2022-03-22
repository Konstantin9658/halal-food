const body = document.querySelector('.page__body');
const main = body.querySelector('main');
const overlay = body.querySelector('.overlay');
const menuBox = main.querySelector('.menu__inner');
const btnsNoJs = body.querySelectorAll('.button--nojs');
const feedbackBox = main.querySelector('.feedback__wrapper');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

function setOverlay(action) {
  switch(action) {
    case 'show':
      body.style.overflow = 'hidden';
      main.style.filter = 'blur(3px)';
      overlay.classList.remove('overlay--hidden');
      break;
    case 'hide':
      body.style.overflow = '';
      main.style.filter = '';
      overlay.classList.add('overlay--hidden');
      break;
    case 'toggle':
      if (body.style.overflow == 'hidden') {
        setOverlay('hide');
      } else {
        setOverlay('show');
      }
      break;
  }
}

export {
  setOverlay,
  isEscEvent,
  overlay,
  menuBox,
  btnsNoJs,
  feedbackBox
}
