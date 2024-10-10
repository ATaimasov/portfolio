import {projectsInfo, stackLinks } from "./projects.js"

let projects = projectsInfo;

const libsLinksKeys = Object.keys(stackLinks.libsLinks).sort();
const additionalLinksKeys = Object.keys(stackLinks.additionalLinks).sort();

let CoincidenceLinksInProject;
let CoincidenceAdditionalLinksInProject;

function generateStackLinks(libs, additional) {

    // find Coincidence between stack.libs and stackLinks.libsLinks
    const libsList = libs.map(key => key.toLowerCase()).sort();
    const CoincidenceLibsNames = libsLinksKeys.filter(lib => libsList.includes(lib))
    // list of links from stackLinks for each project
    CoincidenceLinksInProject = CoincidenceLibsNames.map(key => stackLinks.libsLinks[key])

    const additionalList = additional.map(key => key.toLowerCase()).sort();
    const CoincidenceAdditionalNames = additionalLinksKeys.filter(elem => additionalList.includes(elem))
    // list of additional from stackLinks for each project
    CoincidenceAdditionalLinksInProject = CoincidenceAdditionalNames.map(key => stackLinks.additionalLinks[key])
}

// HTML-Template for Portfolio
function portfolioTemplate({
    type,
    img,
    title,
    description,
    subDescription, // optional
    stack,
    linkGithub,
    linkServer,
    figma, // optional
    youtube, //optional
    originalRepository // optional
}) {

    generateStackLinks(stack.libs, stack.additional)

    const mainPage = `
        <div class="swiper-slide project" data-filter="${type}">
                    <div class="section-swiper__img-container project__img-container">
                        <img src="${img}" alt="${title}"
                            class="section__img section-swiper__img project__img">
                    </div>
                    <div class="project__info-container">
                        <div class="project__header-container">
                            <h4 class="section__text project__header">
                                ${title}
                            </h4>
                            <i class="section__text icon-cancel-1 project__button-close"></i>
                        </div>
                        <p class="section__text project__stack project__link">
                            <span class="icon-magic "></span>
                            <span class="">Стек</span>
                        </p>
                        <p class="section__text project__description project__link">
                            <span class="icon-doc-text "></span>
                            <span class="">Описание</span>
                        </p>
                        <a class="section__text project__server project__link" href="${linkServer}" target="_blank">
                            <span class="icon-globe "></span>
                            <span class="">Сервер</span>
                        </a>
                        <a class="section__text project__github project__link" href="${linkGithub}" target="_blank">
                            <span class="icon-github "></span>
                            <span class="">Github</span>
                        </a>
                    </div>
                `

    const infoPage = `
                    <div class="project__info-container project__description">
                        <div class="project__header-container">
                            <h5 class="section__text project__header">
                                Описание
                            </h5>
                            <i class="section__text icon-level-up project__button-close"></i>
                        </div>
                        <p class="section__text project__description-text">
                            ${description}
                        </p>
                        ${subDescription ? 
                        `<p class="section__text project__description-subtext">
                            ${subDescription}
                        </p>` : ''
                        }
                        ${ (figma || youtube || originalRepository) ?

                        `
                        <p class="section__text project__description-text project__description-study">
                        <b>Учебные ресурсы</b>
                        ${figma ?
                            `<a href="${figma}" target="_blank"
                            class="section__link link--active">Макет</a>
                            ` : ''
                        }
                        ${youtube ?
                            `<a href="${youtube}" target="_blank"
                            class="section__link link--active">Youtube</a>
                            ` : ''
                        }
                        ${originalRepository ?
                            `<a href="${originalRepository}" target="_blank"
                            class="section__link link--active">Github</a>
                            ` : ''
                        }
                        </p>`
                        
                            : ''
                        }
                    </div>
                    `


    const stackPage = `
                    <div class="project__info-container project__stack">
                        <div class="project__header-container">
                            <h5 class="section__text project__header">
                                Стек
                            </h5>
                            <i class="section__text icon-level-up project__button-close "></i>
                        </div>
                        <ul class="section__text project__stack-list project__stack-main">
                            <li>База</li>
                            ${stack.main
                                .map((item) => `<li>${item}</li>`)
                                .join('')
                            }
                        </ul>
                        <ul class="section__text project__stack-list project__stack-libs">
                            ${stack.libs.length !== 0 ? '<li>Библиотеки</li>' : ''}

                            ${stack.libs
                                .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
                                .map((item, index) => 
                                    `<li>
                                        <a href="${CoincidenceLinksInProject[index]}" class="section__link link--active" target="_blank">
                                        ${item}
                                        </a>
                                    </li>`
                                )
                                .join('')
                            }
                        </ul>
                        <ul class="section__text project__stack-list project__stack-additional"> 
                            ${stack.additional.length !== 0 ? '<li>Дополнительно</li>' : ''}
                             ${stack.additional
                                .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
                                .map((item, index) => 
                                `<li>
                                    <a href="${CoincidenceAdditionalLinksInProject[index]}" class="section__link link--active" target="_blank">
                                    ${item}
                                    </a>
                                </li>`)
                                .join('')
                            }
                        </ul>
                    </div>        
                </div>`

    const result = mainPage + infoPage + stackPage;  
    return result
}

const projectsList = document.querySelector('.projects')
console.log(projectsList)

// Generate Portfolio
function generatePortfolio(projects) {

    if(projectsList) {

        projects.forEach(project => 
            projectsList.insertAdjacentHTML("afterbegin", portfolioTemplate(project)))
    }
    
} 

generatePortfolio(projects)

