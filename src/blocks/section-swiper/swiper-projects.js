import {swiperProjects} from '../../js/libs/swiper.js'

export const projects = () => {

    function openProjectInfo (project, projectInfo) {
        project.addEventListener('click', function () {
            projectInfo.classList.add('project__info-container--opened');
        })
    }

    function closeProjectInfo (closeButton, projectInfo) {
        closeButton.addEventListener('click', function (event) {
            event.stopPropagation()
            projectInfo.classList.remove('project__info-container--opened');
            
        })
    }

    

    const project = document.getElementsByClassName('project');
  
    for (let i = 0; i < project.length; i++) {
        const projectInfo = project[i].querySelector('div:nth-child(2)');
        openProjectInfo(project[i], projectInfo);

        const closeButton = project[i].querySelector('i');
        closeProjectInfo(closeButton, projectInfo);
        swiperProjects.on('slideChange', function () {
            projectInfo.classList.remove('project__info-container--opened');
        });
    }

}

