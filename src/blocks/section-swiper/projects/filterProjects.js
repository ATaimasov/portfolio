import { reinitializeSlider} from '../../../js/libs/swiper.js'

const projectFilterButtons = document.querySelectorAll('.projects__navigation-button');

if(projectFilterButtons) {

    function filterButtonsInteraction() {

        projectFilterButtons.forEach(button => {

            button.addEventListener('click', function() {
                const buttonCategory = this.getAttribute('data-button-category').toLowerCase();
                
                projectFilterButtons.forEach(span => span.classList.remove("projects__navigation-button--active"));
                this.classList.add("projects__navigation-button--active");

                const dataFilterElements = document.querySelectorAll("[data-slide-category]");
                const menus = document.querySelectorAll(".project__info-container");
                
                // Reset all slides
                if (buttonCategory === "all") {
                    dataFilterElements.forEach(element => {
                        element.classList.remove("non-swiper-slide");
                        element.classList.add("swiper-slide");
                        element.style.display = "block";
                    });

                } else { 
                    // Filtering by own or learn
                    const projectSlides = document.querySelectorAll(".swiper-slide");
                    projectSlides.forEach(slide => {
                        if (!slide.getAttribute("data-slide-category") || (slide.getAttribute("data-slide-category") !== buttonCategory)) {
                            slide.classList.add("non-swiper-slide");
                            slide.classList.remove("swiper-slide");
                            slide.style.display = "none";
                        }
                    });

                    dataFilterElements.forEach(element => {
                        if (element.getAttribute("data-slide-category") === buttonCategory) {
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


