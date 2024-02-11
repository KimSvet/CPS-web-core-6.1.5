const burgerButton = document.querySelector('.burger')
const closeLAbutton = document.querySelector('.left-sidebar .close')
const leftAside = document.querySelector('.left-sidebar')
const asides = document.querySelectorAll('aside')

function handleDocumentClick(event) {
  if (!leftAside.contains(event.target) && event.target !== burgerButton) {
    leftAside.classList.remove('open')
    document.removeEventListener('click', handleDocumentClick)
  }
}

burgerButton.addEventListener('click', function () {
  for (let item of asides) {
    item.classList.remove('open')
  }
  leftAside.classList.add('open')
  document.addEventListener('click', handleDocumentClick)
})

closeLAbutton.addEventListener('click', function () {
  leftAside.classList.remove('open')
})
