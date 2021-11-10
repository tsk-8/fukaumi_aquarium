var mySwiper = new Swiper('.swiper', {
  freeMode: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  autoplay: {
    delay: 4000,
	disableOnInteraction: false,
	reverseDirection: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  


});
