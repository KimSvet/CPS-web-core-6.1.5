const buttonMore = document.querySelector('.devices__more-button');
const buttonLess = document.querySelector('.devices__less-button');
let brandItems = {};
if (window.innerWidth > 1600) {
    deviceItems = document.querySelectorAll('.devices-container__item:nth-child(n+6)');
} else if (window.innerWidth > 1344) {
    deviceItems = document.querySelectorAll('.devices-container__item:nth-child(n+5)');
} else if (window.innerWidth > 480) {
    deviceItems = document.querySelectorAll('.devices-container__item:nth-child(n+4)');
} 

buttonMore.addEventListener('click', function() {
    for(let item of deviceItems) {
        item.style.display = 'flex';
    }
    buttonMore.style.display = 'none';
    buttonLess.style.display = 'flex';
});

buttonLess.addEventListener('click', function(){
    for(let item of deviceItems) {
        item.style.display = 'none';
    }

    buttonMore.style.display = 'flex';
    buttonLess.style.display = 'none';
})
