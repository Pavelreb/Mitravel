// Swiper

const swiperIntro = new Swiper('.intro-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperVideo = new Swiper('.video-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 105,
    allowTouchMove: true,
    grabCursor: true,
    effect: "coverflow",

    breakpoints: {
        // when window width is >= 320px
        768: {
          spaceBetween: 25
        },
        // when window width is >= 992px
        992: {
          spaceBetween: 75
        },
        // when window width is >= 1200px
        1201: {
          spaceBetween: 105
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Menu

const body = document.body;
const site = document.querySelector(".site-container");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".btn-menu");
const menuCloseBtn = document.querySelector(".menu-close-btn");

menuBtn.addEventListener("click", () => {
    body.classList.add("no-scroll");
    site.classList.add("overlap");
    menu.classList.add("activ-menu");
});

menuCloseBtn.addEventListener("click", () => {
    body.classList.remove("no-scroll");
    site.classList.remove("overlap");
    menu.classList.remove("activ-menu");
});

// Video player

videojs(document.querySelector(".video-js"));

// Modals

const btnPlay = document.querySelectorAll(".btn-play");
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");

btnPlay.forEach((el) => {
    el.addEventListener("click", (e) => {
        let path = e.currentTarget.getAttribute("data-path");
        modals.forEach((el) => {
            el.classList.remove("modal--visible");
        });
        modalOverlay.classList.add("modal-overlay--visible");
        document.querySelector(`[data-target="${path}"]`).classList.add("modal--visible");
    });
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
            el.classList.remove("modal--visible");
        });
    }
});