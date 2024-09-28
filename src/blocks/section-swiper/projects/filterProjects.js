import {swiperProjects, reinitializeSlider} from '../../../js/libs/swiper.js'
import {allProjects, ownProjects, studyProjects} from './generateProjects.js'

const projs = document.getElementById('projects');

const projectFilterButtons = document.querySelectorAll('.projects__navigation-button');

if(projectFilterButtons) {

    function filterButtonsInteraction() {

        projectFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter').toLowerCase();
                
                if(button.classList.contains('projects__navigation-button--active')) {
                    button.classList.remove('projects__navigation-button--active');
                } else {
                    projectFilterButtons.forEach(btn => btn.classList.remove('projects__navigation-button--active'));
                    button.classList.add('projects__navigation-button--active');
                }
    
                filterSlides(filter);
                
            });
        })
    }
    
    filterButtonsInteraction()


    // function filterSlides(filter) {

        // if (filter === 'all') {
        //     // Show all slides
        //     document.querySelectorAll('.swiper-slide').forEach(slide => {
        //         slide.classList.remove('non-swiper-slide');
        //         slide.style.display = 'block'; // Show the slide
        //     });
        // } else {
        //     // Hide slides that do not match the filter
        //     document.querySelectorAll('.swiper-slide').forEach(slide => {
        //         if (!slide.getAttribute('data-filter') === filter) {
        //             slide.classList.add('non-swiper-slide');
        //             slide.style.display = 'none'; // Hide the slide
        //         } else {
        //             slide.classList.remove('non-swiper-slide');
        //             slide.style.display = 'block'; // Show the slide
        //         }
        //     });
        // }     
  
// }

function filterSlides(filter) {
    const slides = document.querySelectorAll('.swiper-slide');
    
    slides.forEach((slide) => {
       let category = slide.getAttribute('data-category')

       if (filter === 'own' && category === 'own') {

            // button own

            projs.innerHTML = ownProjects
            // updateSlides(slide)
            // generateStudyProjects()

       } else if (category === 'study' && filter === 'study') {

            // button own

            // updateSlides(slide)
            // generateMyProjects()
       }
    });

        // Destroy and reinitialize Swiper
        reinitializeSlider();
}


        // function updateSlides(slide) {
        //     if(slide.style.display = 'none') {
        //         slide.style.display = 'block';
        //     } else {
        //         slide.style.display = 'none';
        //     }
        //     swiperProjects.update();
        // }
}
