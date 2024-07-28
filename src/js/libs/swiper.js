import Swiper from 'swiper';
import { Pagination, EffectCube, Mousewheel, EffectFade} from 'swiper/modules';

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

  export const swiperProjects = new Swiper('.swiper-projects', {
    modules: [Pagination, EffectFade, Mousewheel],
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
 

  });

  