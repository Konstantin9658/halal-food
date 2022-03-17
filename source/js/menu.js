import { setOverlayVisible, setOverlayHide, overlay } from "./util.js";

const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('.header-menu__nav-list');

function openCloseMenu() {
  if (!menu.classList.contains('header-menu__nav-list--show')) {
    menu.classList.toggle('header-menu__nav-list--show');
    setOverlayVisible(overlay);
    btnMenu.classList.remove('button--burger');
    btnMenu.classList.add('button--closed');
  } else {
    menu.classList.toggle('header-menu__nav-list--show');
    setOverlayHide(overlay);
    btnMenu.classList.remove('button--closed');
    btnMenu.classList.add('button--burger');
  }
}

export {
  btnMenu,
  openCloseMenu
}
