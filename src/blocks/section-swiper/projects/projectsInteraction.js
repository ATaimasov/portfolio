import {swiperProjects} from '../../../js/libs/swiper.js'

const project = document.getElementsByClassName('project');
const menus = document.querySelectorAll(".project__info-container");
const projectFilterButtons = document.querySelectorAll('.projects__navigation-button');


function projectsInteraction() {

    if(project.length > 0) {
        swiperArrowInteraction()
        wheelSliderIntegration() 
        projectsMenuInteraction()
        navigationButtonsInteraction(projectFilterButtons);
    }

}

projectsInteraction()



function swiperArrowInteraction () {

    const projectsRightArrow = document.getElementById('projects-right-arrow');
    const projectsLeftArrow = document.getElementById('projects-left-arrow'); 

    projectsRightArrow.addEventListener('click', function() {
        swiperProjects.slideNext();
    })
    projectsLeftArrow.addEventListener('click', function() {
        swiperProjects.slidePrev();
    })

}

function wheelSliderIntegration() {

    window.addEventListener('wheel', function(e) {
        e.preventDefault();
        swiperProjects.autoplay.stop();

        if (e.deltaY < 0) {
            // Scroll up
            swiperProjects.slideNext();
            
        } else {
            // Scroll down
            swiperProjects.slidePrev();
        }
        menus.forEach(menu => menu.classList.remove("project__info-container--opened"));
    }, { passive: false });

}


function navigationButtonsInteraction(buttons) {

    document.addEventListener('keydown', function(event) {

        const focusedElement = document.activeElement;
        

        const key = event.key;
        const firstButton = buttons[0];
        const secondButton = buttons[1];
        const thirdButton = buttons[2];

        if (key === 'Tab') {
            event.preventDefault();
        
            switch (focusedElement) {
                case firstButton:
                    secondButton.focus();
                    break;
                case secondButton:
                    thirdButton.focus();
                    break;
                case thirdButton:
                    firstButton.focus();
                    break;
                default:
                    firstButton.focus();
                    break;
            }
        }

        if (key === 'Enter') {

            event.preventDefault();

            switch(focusedElement) {
                case firstButton:
                    firstButton.click();
                    break;
                case secondButton:
                    secondButton.click();
                    break;
                case thirdButton:
                    thirdButton.click();
                    break;
            }
        }
      });
}


function projectsMenuInteraction() {

        
    for (let i = 0; i < project.length; i++) {

        const projectInfo = project[i].querySelector('div:nth-child(2)');
        const closeButton = project[i].querySelector('i');
        openProjectInfo(project[i], projectInfo);
        closeProjectInfo(closeButton, projectInfo);

        const descriptionButton = projectInfo.querySelector('p:nth-of-type(2)');
        const projectDescription = projectInfo.nextElementSibling;
        const returnDescriptionButton = projectDescription.querySelector('i');
        openProjectInfo(descriptionButton, projectDescription);
        closeProjectInfo(returnDescriptionButton, projectDescription);

        const stackButton = projectInfo.querySelector('p:nth-of-type(1)');
        const projectStack = projectDescription.nextElementSibling;
        const returnStackButton = projectStack.querySelector('i');
        openProjectInfo(stackButton, projectStack);
        closeProjectInfo(returnStackButton, projectStack);

    }

    swiperProjects.on('slideChange', function () {
        menus.forEach(menu => menu.classList.remove("project__info-container--opened"));
    });
}

function openProjectInfo (target, openingElement) {
    target.addEventListener('click', function () {
        openingElement.classList.add('project__info-container--opened');
        swiperProjects.autoplay.stop();
    })
}

function closeProjectInfo (target, closingElement) {
    target.addEventListener('click', function (target) {
        target.stopPropagation()
        closingElement.classList.remove('project__info-container--opened');
    })

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closingElement.classList.remove('project__info-container--opened');
        }
    })
}
