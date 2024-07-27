import Swiper from 'swiper';
import { Pagination, EffectCube, Mousewheel} from 'swiper/modules';

 export const swiperBeforeIt = new Swiper('.swiper-before-it', {
    modules: [Pagination, EffectCube, Mousewheel ],
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
  
  });

  export const swiperAfterIt = new Swiper('.swiper-after-it', {
    modules: [Pagination, EffectCube, Mousewheel],
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
 

  });