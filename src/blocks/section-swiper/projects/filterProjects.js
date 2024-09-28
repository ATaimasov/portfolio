import { reinitializeSlider} from '../../../js/libs/swiper.js'

const projectFilterButtons = document.querySelectorAll('.projects__navigation-button');

if(projectFilterButtons) {

    function filterButtonsInteraction() {

        projectFilterButtons.forEach(button => {

            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-category').toLowerCase();
                
                projectFilterButtons.forEach(span => span.classList.remove("'projects__navigation-button--active'"));
                this.classList.add("'projects__navigation-button--active'");

                const dataFilterElements = document.querySelectorAll("[data-filter]");
                const menus = document.querySelectorAll(".project__info-container");
                
                if (filter === "all") {
                    dataFilterElements.forEach(element => {
                        element.classList.remove("non-swiper-slide");
                        element.classList.add("swiper-slide");
                        element.style.display = "block";
                        
                    });

                } else {
                    const swiperSlides = document.querySelectorAll(".swiper-slide");
                    swiperSlides.forEach(slide => {
                        if (!slide.getAttribute("data-filter") || slide.getAttribute("data-filter") !== filter) {
                            slide.classList.add("non-swiper-slide");
                            slide.classList.remove("swiper-slide");
                            slide.style.display = "none";
                        }
                    });

                    dataFilterElements.forEach(element => {
                        if (element.getAttribute("data-filter") === filter) {
                            element.classList.remove("non-swiper-slide");
                            element.classList.add("swiper-slide");
                            element.style.display = "block";
                            element.removeAttribute("style"); // Remove inline styles
                        }
                    });

                }

                menus.forEach(menu => menu.classList.remove("project__info-container--opened"));

                reinitializeSlider()

            });
        })
    }
    
    filterButtonsInteraction()

}


