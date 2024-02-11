const buttonMore = document.querySelector('.brands__more-button');
const buttonLess = document.querySelector('.brands__less-button');
let brandItems = {};
if (window.innerWidth > 1583) {
    brandItems = document.querySelectorAll('.brands-container__item:nth-child(n+11)');
} else if (window.innerWidth > 1336) {
    brandItems = document.querySelectorAll('.brands-container__item:nth-child(n+9)');
} else if (window.innerWidth > 480) {
    brandItems = document.querySelectorAll('.brands-container__item:nth-child(n+7)');
} 
buttonMore.addEventListener('click', function() {
    for(let item of brandItems) {
        item.style.display = 'flex';
    }
    console.log(brandItems)

    buttonMore.style.display = 'none';
    buttonLess.style.display = 'flex';
});

buttonLess.addEventListener('click', function(){
    for(let item of brandItems) {
        item.style.display = 'none';
    }

    buttonMore.style.display = 'flex';
    buttonLess.style.display = 'none';
})
