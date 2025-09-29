export const swiper = new Swiper('.swiper', {
  speed: 600,
   
  navigation: {
      nextEl: '.arow-right-btn',
      prevEl: '.arow-left-btn',
    },
   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
   scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});






