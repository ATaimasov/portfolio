
// libs
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

 const swiperBeforeIt = new Swiper('.swiper-before-it', {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
      },
    grabCursor: true,
    effect: "flip",
    speed: 500,
    loop: false,
    clickable: true,
    mousewheel: {
    invert: false,
    sensitivity: 1,
  },
  });

  swiperBeforeIt.enable();


  const swiperAfterIt = new Swiper('.swiper-after-it', {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination-2",
      },
    grabCursor: true,
    effect: "flip",
    speed: 500,
    loop: false,
    clickable: true,
    mousewheel: {
    invert: false,
    sensitivity: 1,
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


