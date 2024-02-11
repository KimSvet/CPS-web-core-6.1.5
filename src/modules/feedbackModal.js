const feedbackButtons = document.querySelectorAll('.chat')
const closeFbutton = document.querySelector('.feedback .close')
const feedbackAside = document.querySelector('.feedback')
const asides = document.querySelectorAll('aside')

function handleDocumentClick(event) {
  if (
    !feedbackAside.contains(event.target) &&
    !event.target.classList.contains('chat')
  ) {
    feedbackAside.classList.remove('open')
    document.removeEventListener('click', handleDocumentClick)
  }
}
for (let fb of feedbackButtons) {
  fb.addEventListener('click', function () {
    for (let item of asides) {
      item.classList.remove('open')
      console.log(item)
    }
    feedbackAside.classList.add('open')
    document.addEventListener('click', handleDocumentClick)
  })
}

closeFbutton.addEventListener('click', function () {
  feedbackAside.classList.remove('open')
})
