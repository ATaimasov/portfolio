import {swiperProjects} from '../../../js/libs/swiper.js'

function projects() {

    const project = document.getElementsByClassName('project');

    if(project.length > 0) {

        function wheelSlider() {

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

            }, { passive: false });

        }

        wheelSlider() 

        const myProjectsButton = document.getElementById('my-projects-button');
        const studyProjectsButton = document.getElementById('study-projects-button');

        function navigationButtonsIteraction(button1, button2) {

            document.addEventListener('keydown', function(event) {

                const focusedElement = document.activeElement;
                

                if (event.key === 'Tab') {

                    if (focusedElement !== button1 && focusedElement !== button2) {
                        event.preventDefault();
                        button1.focus(); // Focus the first button
                    } else if (focusedElement === button1) {
                        event.preventDefault();
                        button2.focus(); // Focus the second button
                    } else if (focusedElement === button2) {
                        event.preventDefault();
                        button1.focus(); // Focus back to the first button
                    }
                }

                if (event.key === 'Enter') {

                    if (focusedElement === button1) {
                        button1.click();
                    } else if (focusedElement === button2) {
                        button2.click();
                    }

                }

              });
        }

        navigationButtonsIteraction(myProjectsButton, studyProjectsButton);

        const projectsSection = document.getElementById('projects-section');

        function trackSwipe(swipeArea) {
            let touchstartX = 0;
            let touchstartY = 0;

            swipeArea.addEventListener('touchstart', function(event) {
                touchstartX = event.changedTouches[0].screenX;
                touchstartY = event.changedTouches[0].screenY;
                swiperProjects.autoplay.stop();
            }, { passive: true });

            swipeArea.addEventListener('touchend', function(event) {
                const touchendX = event.changedTouches[0].screenX;
                const touchendY = event.changedTouches[0].screenY;
                swiperProjects.autoplay.stop();
    
                handleGesture(touchstartX, touchstartY, touchendX, touchendY);
            }, { passive: true });

            function handleGesture(startX, startY, endX, endY) {
                const xDiff = endX - startX;
                const yDiff = endY - startY;
    
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    // Horizontal swipe
                    if (xDiff > 0) {
                        swiperProjects.slideNext();
                        // Swipe right
                        console.log('Swiped Right');

                    } else {

                        swiperProjects.slidePrev();
                        // Swipe left
                        console.log('Swiped Left');

                    }
                } else {
                    // Vertical swipe
                    if (yDiff > 0) {
                        // Swipe down
                        console.log('Swiped Down');

                    } else {
                        // Swipe up
                        console.log('Swiped Up');

                    }
                }
            }
        }

        trackSwipe(projectsSection)

        
        function projectsInteraction() {

        
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
        
                swiperProjects.on('slideChange', function () {
                    projectInfo.classList.remove('project__info-container--opened');
                    projectDescription.classList.remove('project__info-container--opened');
                    projectStack.classList.remove('project__info-container--opened');
                });
        
            }
        }

        projectsInteraction()
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
    }

}

projects()