const navbar__btn = document.querySelector('.navbar__btn');
// const navbar__menubtn = document.querySelector('.navbar__menu-btn');
const navbar__menu = document.querySelector('.navbar__menu');


navbar__btn.addEventListener('click', function() {
    navbar__menu.classList.toggle('transform')
})
navbar__btn.addEventListener('click', function() {
    navbar__menu.classList.toggle('transform2')
})

const card__title__btn = document.querySelector('.card__title__btn');
const card__text = document.querySelector('.card__text');

card__title__btn.addEventListener('click', function() {
    card__text.classList.toggle('displey')
})
card__title__btn.addEventListener('click', function() {
    card__text.classList.toggle('displey2')
})


const card__title2__btn = document.querySelector('.card__title2__btn');
const card__text2 = document.querySelector('.card__text2');

card__title2__btn.addEventListener('click', function() {
    card__text2.classList.toggle('displey3')
})
card__title2__btn.addEventListener('click', function() {
    card__text2.classList.toggle('displey4')
})