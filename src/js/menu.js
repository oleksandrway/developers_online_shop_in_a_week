
const menuSwitcher = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

menuSwitcher.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
},
)
