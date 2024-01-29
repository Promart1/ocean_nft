const menuBtn = document.querySelector('.menu__button');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close')

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});

// document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container', {
//         loop: false,
//         direction: 'horizontal',
//         slidesPerView: 1,
//         centeredSlides: true,
//         //  slidesPerView: 'auto', // Опція per view
//         // spaceBetween: 4, // Проміжок між слайдами
//         // navigation: {
//         //     nextEl: '.swiper-button-next',
//         //     prevEl: '.swiper-button-prev',
//         // },
//     });
// });

