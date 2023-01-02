
const cards = document.querySelectorAll('.services__card')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('services__card--active')
    const body = card.querySelector('.services__card-body')
    if (body.style.maxHeight)
      body.style.maxHeight = null

    else
      body.style.maxHeight = `${body.scrollHeight}px`
  },
  )
})
