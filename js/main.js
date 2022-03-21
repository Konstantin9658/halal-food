import { showMap, closeMap, mapLink, btnCloseMap } from './map.js';
import { goTopBtn, trackScroll, backToTop } from './scrollup.js';
import { openCloseMenu, btnMenu } from './menu.js';

mapLink.addEventListener('click', showMap);
btnCloseMap.addEventListener('click', closeMap);
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
btnMenu.addEventListener('click', openCloseMenu);
