
const menuSwitcher = document.querySelector('.header__menu-btn')
const menu = document.querySelector('.menu')

menuSwitcher.addEventListener('click', () => {
  menu.classList.toggle('header__menu--active')
},
)
