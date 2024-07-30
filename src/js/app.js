
// libs
import {swiperBeforeIt, swiperAfterIt } from './libs/swiper.js'
  swiperBeforeIt.enable();
  swiperAfterIt.enable();



// import {fontAwesome} from './libs/font-awesome.js'
// fontAwesome();

// basemodules
import { isWebp } from './base-modules/webpCheck.js';
isWebp();

// blocks
import { burger } from '../blocks/header-nav/header-nav.js';
burger();

import { projects} from '../blocks/section-swiper/swiper-projects.js'
projects();