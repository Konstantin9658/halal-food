import { setOverlay, isEscEvent, overlay } from './util.js';
import './util.js'

const mapLink = document.querySelector('#showMap');
const mapContainer = document.querySelector('#modal-map');
const btnCloseMap = mapContainer.querySelector('#closeMap');

function escRemover() {
  window.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMap();
    }
  }, { once: true })
}

function closeMap() {
  mapContainer.classList.toggle('modal--show');
  setOverlay('hide');
}

function showMap(evt) {
  evt.preventDefault();
  setOverlay('show');
  mapContainer.classList.toggle('modal--show');
  escRemover();
}

export {
  showMap,
  closeMap,
  btnCloseMap,
  mapLink
}
