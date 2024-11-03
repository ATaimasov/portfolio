import {projects} from "../data/projects.js"
import {makeProjectTemplate} from "./makeProjectTemplate.js"

const projectsList = document.querySelector('.projects')

// Generate Portfolio
function generatePortfolio(projects) {

    if(projectsList) {

        projects.forEach(project => 
            projectsList.insertAdjacentHTML("afterbegin", makeProjectTemplate(project)))
    }
    
} 

generatePortfolio(projects)

