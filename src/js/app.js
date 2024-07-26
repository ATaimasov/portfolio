
// libs
import Swiper from 'swiper';
import { Pagination, EffectCube, Mousewheel, Navigation} from 'swiper/modules';

 const swiperBeforeIt = new Swiper('.swiper-before-it', {
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

  swiperBeforeIt.enable();


  const swiperAfterIt = new Swiper('.swiper-after-it', {
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

  swiperAfterIt.enable();

// basemodules
import { isWebp } from './base-modules/webpCheck.js';
isWebp();

// blocks
import { burger } from '../blocks/header-nav/header-nav.js';
burger();

import { scrollFading } from '../blocks/header-nav/header-nav.js';
scrollFading();


