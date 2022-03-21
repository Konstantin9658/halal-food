const body = document.querySelector('.page__body');
const main = body.querySelector('main');
const overlay = body.querySelector('.overlay');
const menuBox = main.querySelector('.menu__inner');
const btnsNoJs = body.querySelectorAll('.button--nojs');
const feedbackBox = main.querySelector('.feedback__wrapper');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

function setOverlayVisible(overlay) {
  body.style.overflow = 'hidden';
  main.style.filter = 'blur(3px)';
  overlay.classList.remove('overlay--hidden');
}

function setOverlayHide(overlay) {
  body.style.overflow = '';
  main.style.filter = '';
  overlay.classList.add('overlay--hidden');
}

export {
  setOverlayHide,
  setOverlayVisible,
  isEscEvent,
  overlay,
  menuBox,
  btnsNoJs,
  feedbackBox
}
