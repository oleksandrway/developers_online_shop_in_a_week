import 'virtual:windi.css'
import './src/sass/main.scss'

// menu

const menuSwitcher = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

menuSwitcher.addEventListener('click', () => {
  // menu.classList.toggle('<md:h-0')
  menu.classList.toggle('menu--hidden')
},
)

// services cards

const cards = document.querySelectorAll('.services__card')

cards.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const card = arrow.closest('.services__card')
    card.classList.toggle('services__card--active')
    card.classList.toggle('services__card--disabled')
  },
  )
})
