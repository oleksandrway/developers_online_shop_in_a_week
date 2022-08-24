import 'virtual:windi.css'
import './src/sass/main.scss'

const menuSwitcher = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

menuSwitcher.addEventListener('click', () => {
  // menu.classList.toggle('<md:h-0')
  menu.classList.toggle('menu--hidden')
},
)
