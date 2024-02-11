import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

function handleResize() {
  const brands = document.querySelector('.brands')
  const brandsContainer = document.querySelector('.brands-container')
  const brandsContainerItems = document.querySelectorAll(
    '.brands-container__item'
  )
  const devices = document.querySelector('.devices')
  const devicesContainer = document.querySelector('.devices-container')
  const devicesContainerItems = document.querySelectorAll(
    '.devices-container__item'
  )
  const prices = document.querySelector('.prices')
  const pricesContainer = document.querySelector('.prices-container')
  const pricesContainerItems = document.querySelectorAll(
    '.prices-container__item'
  )
  if (window.innerWidth <= 480) {
    brands.classList.add('swiper')
    brandsContainer.classList.add('swiper-wrapper')
    for (let item of brandsContainerItems) {
      item.classList.add('swiper-slide')
    }
    devices.classList.add('swiper')
    devicesContainer.classList.add('swiper-wrapper')
    for (let item of devicesContainerItems) {
      item.classList.add('swiper-slide')
    }
    prices.classList.add('swiper')
    pricesContainer.classList.add('swiper-wrapper')
    for (let item of pricesContainerItems) {
      item.classList.add('swiper-slide')
    }
  } else {
    brands.classList.remove('swiper')
    brandsContainer.classList.remove('swiper-wrapper')
    for (let item of brandsContainerItems) {
      item.classList.remove('swiper-slide')
    }
    devices.classList.remove('swiper')
    devicesContainer.classList.remove('swiper-wrapper')
    for (let item of devicesContainerItems) {
      item.classList.remove('swiper-slide')
    }
    prices.classList.remove('swiper')
    pricesContainer.classList.remove('swiper-wrapper')
    for (let item of pricesContainerItems) {
      item.classList.remove('swiper-slide')
    }
  }
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
    slidesPerView: 'auto'
  })
}

window.addEventListener('load', handleResize)
window.addEventListener('resize', handleResize)
