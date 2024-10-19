import {getProjectStackLinks} from "./getProjectStackLinks.js"

// HTML-Template for Portfolio
export function makeProjectTemplate({
    id,
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

    const {CoincidenceLinksInProject, CoincidenceAdditionalLinksInProject, CoincidenceBaseLinksInProject} = getProjectStackLinks(stack.libs, stack.additional, stack.main);

    const mainPage = `
        <div class="swiper-slide project" data-slide-category="${type}" data-hash="project${id}">
                    <div class="section-swiper__img-container project__img-container">
                        <img src="${img}" alt="${title}"
                            class="project__img">
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

                        <ul class="section__text project__description-text project__description-study">     
                        ${ (figma || youtube || originalRepository) ? `<li class="project__description-study-title">Учебные ресурсы</li>` : ''}

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
                        </ul>
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
                                .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
                                .map((item, index) => 
                                    `<li>
                                        <a href="${CoincidenceBaseLinksInProject[index]}" class="section__link link--active" target="_blank">
                                        ${item}
                                        </a>
                                    </li>`
                                )
                                .join('')
                            }
                        </ul>
                        <ul class="section__text project__stack-list project__stack-libs">
                            ${stack.libs.length !== 0 ? '<li>Библиотеки</li>' : ''}

                            ${stack.libs.length >= 5 ? '<div class="project__stack-libs--grid">' : ''} 

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

                            ${stack.libs.length >= 5 ? '</div>' : ''}
                        </ul>
                        <ul class="section__text project__stack-list project__stack-additional"> 
                            ${stack.additional.length !== 0 ? '<li>Дополнительное</li>' : ''}
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

    
    return mainPage + infoPage + stackPage
}


