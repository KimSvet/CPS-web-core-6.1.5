const descrButtonMore = document.querySelector('.description__more-button')
const descrText = document.querySelector('.description__text')

descrButtonMore.addEventListener('click', function () {
  console.log(5)
  descrText.style.height = 'fit-content'
  descrButtonMore.style.display = 'none'
})
