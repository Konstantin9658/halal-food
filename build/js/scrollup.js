const goTopBtn = document.querySelector('#goTop');

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('button--up-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('button--up-show');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -10);
    setTimeout(backToTop, 0);
  }
}

export {
  backToTop,
  trackScroll,
  goTopBtn
}
