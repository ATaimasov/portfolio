import {swiperProjects} from '../../js/libs/swiper.js'

export const projects = () => {

    const project = document.getElementsByClassName('project');
  
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
        }

        swiperProjects.on('slideChange', function () {
            projectInfo.classList.remove('project__info-container--opened');
            projectDescription.classList.remove('project__info-container--opened');
            projectStack.classList.remove('project__info-container--opened');
        });


    }

}

