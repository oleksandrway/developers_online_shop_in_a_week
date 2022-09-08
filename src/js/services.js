
const cardHeaders = document.querySelectorAll('.services__card-header')

cardHeaders.forEach((cardHeader) => {
  cardHeader.addEventListener('click', () => {
    const card = cardHeader.closest('.services__card')
    card.classList.toggle('services__card--active')
    card.classList.toggle('services__card--disabled')
  },
  )
})
