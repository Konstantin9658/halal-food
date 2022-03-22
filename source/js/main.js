import { showMap, closeMap, mapLink, btnCloseMap } from './map.js';
import { goTopBtn, trackScroll, backToTop } from './scrollup.js';
import { openCloseMenu, btnMenu, menuItems } from './menu.js';
import { menuBox, btnsNoJs, feedbackBox } from './util.js'

for (let btnNoJs of btnsNoJs) {
  btnNoJs.classList.remove('button--nojs');
}

if (menuBox) {
  menuBox.classList.remove('menu__inner--nojs');
}
if (feedbackBox) {
  feedbackBox.classList.remove('feedback__wrapper--nojs');
}

mapLink.addEventListener('click', showMap);
btnCloseMap.addEventListener('click', closeMap);
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
btnMenu.addEventListener('click', (evt) => openCloseMenu(evt.target));

for (let menuItem of menuItems) {
  menuItem.addEventListener('click', (evt) => openCloseMenu(evt.target));
}
