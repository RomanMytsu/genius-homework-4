const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pagination",
    bulletClass: "pagination__btn",
    bulletActiveClass: "pagination__btn--active",
  },

  navigation: {
    nextEl: ".carousel-btn.next",
    prevEl: ".carousel-btn.prev",
  },
});
