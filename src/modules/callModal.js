const callButtons = document.querySelectorAll('.call')
const closeCbutton = document.querySelector('.phonecall .close')
const phonecallAside = document.querySelector('.phonecall')
const asides = document.querySelectorAll('aside')

function handleDocumentClick(event) {
  if (
    !phonecallAside.contains(event.target) &&
    !event.target.classList.contains('call')
  ) {
    phonecallAside.classList.remove('open')
    document.removeEventListener('click', handleDocumentClick)
  }
}
for (let call of callButtons) {
  call.addEventListener('click', function () {
    for (let item of asides) {
      item.classList.remove('open')
      console.log(item)
    }
    phonecallAside.classList.add('open')
    document.addEventListener('click', handleDocumentClick)
  })
}

closeCbutton.addEventListener('click', function () {
  phonecallAside.classList.remove('open')
})
