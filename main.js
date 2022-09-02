import 'virtual:windi.css'
import './src/sass/main.scss'

import { ItcSlider } from '/src/itc-slider/itc-slider.min.js'

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

// examples-slider

if (window.innerWidth < 768) {
  document.addEventListener('DOMContentLoaded', () => {
    const examplesSlider = new ItcSlider('.examples__slider')
  })
}
