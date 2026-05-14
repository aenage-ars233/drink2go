const mainNav = document.querySelector('.main-nav');
const toggleButton = mainNav.querySelector('.main-nav__toggle');
const siteList = mainNav.querySelector('.main-nav__site-navigation-list');

mainNav.classList.remove('main-nav--no-js');
toggleButton.addEventListener('click', () => {
  if (!siteList.classList.contains('main-nav__site-navigation-list--opened')) {
    toggleButton.classList.add('main-nav__toggle--close');
    toggleButton.querySelector('.visually-hidden').textContent = 'Закрыть меню';
    siteList.classList.add('main-nav__site-navigation-list--opened');
  } else {
    toggleButton.classList.remove('main-nav__toggle--close');
    toggleButton.querySelector('.visually-hidden').textContent = 'Открыть меню';
    siteList.classList.remove('main-nav__site-navigation-list--opened');
  }
});
