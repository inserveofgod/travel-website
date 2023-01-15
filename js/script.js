"use strict"

// initialize swiper(s)

const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,

    breakpoints: {
        960: {
            spaceBetween: 25,
            slidesPerView: 2,
        },
        1250: {
           spaceBetween: 50,
           slidesPerView: 3,
        }
    }
})

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,

    //  pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: true,

    breakpoints: {
        990: {
            slidesPerView: 5
        },
        550: {
            slidesPerView: 3
        }
    }
})
