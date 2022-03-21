const body = document.querySelector('.page__body');
const main = body.querySelector('main');
const overlay = body.querySelector('.overlay');

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
  overlay
}
