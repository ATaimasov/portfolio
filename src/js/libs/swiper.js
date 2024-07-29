import Swiper from 'swiper';
import { Pagination, EffectCube, Mousewheel, EffectFade, Autoplay, Keyboard} from 'swiper/modules';

 export const swiperBeforeIt = new Swiper('.swiper-before-it', {
    modules: [Pagination, EffectCube, Mousewheel, Keyboard],
    grabCursor: true,
    effect: "cube",
    speed: 1000,
    loop: false,
    mousewheel: {
    invert: false,
    sensitivity: 1,
  },
  pagination: {
    el: ".swiper-pagination__before-it",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },

  
  });

  export const swiperAfterIt = new Swiper('.swiper-after-it', {
    modules: [Pagination, EffectCube, Mousewheel, Keyboard],
    grabCursor: true,
    effect: "cube",
    speed: 1000,
    loop: false,
    mousewheel: {
    invert: false,
    sensitivity: 1,
  },
  pagination: {
    el: ".swiper-pagination__after-it",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },

  });

  export const swiperProjects = new Swiper('.swiper-projects', {
    modules: [Pagination, EffectFade, Mousewheel, Autoplay, Keyboard],
    grabCursor: true,
    speed: 1000,
    effect: 'fade',
    loop: true,
    mousewheel: {
    invert: false,
    sensitivity: 1,
  },
  
  pagination: {
    el: ".swiper-pagination__projects",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },

  });

  