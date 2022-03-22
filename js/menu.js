import { setOverlay } from "./util.js";

const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('.header__nav-list');
const menuItems = Array.from(menu.querySelectorAll('.header__nav-item'));

function openCloseMenu(target) {
  if (target === btnMenu) {
    menu.classList.toggle('header__nav-list--show');
    setOverlay('toggle');
    btnMenu.classList.toggle('button--burger');
    btnMenu.classList.toggle('button--closed');
  } else if (menuItems.includes(target.parentNode)) {
    menu.classList.remove('header__nav-list--show');
    setOverlay('hide');
    btnMenu.classList.remove('button--closed');
    btnMenu.classList.add('button--burger');
  }
}

export {
  btnMenu,
  openCloseMenu,
  menuItems
}
