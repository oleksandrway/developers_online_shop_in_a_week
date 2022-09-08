import 'virtual:windi.css'
import './src/sass/main.scss'

import '/src/itc-slider/itc-slider.min.js'

// menu

const menuSwitcher = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

menuSwitcher.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
},
)

// services cards

const cardHeaders = document.querySelectorAll('.services__card-header')

cardHeaders.forEach((cardHeader) => {
  cardHeader.addEventListener('click', () => {
    const card = cardHeader.closest('.services__card')
    card.classList.toggle('services__card--active')
    card.classList.toggle('services__card--disabled')
  },
  )
})
