import {stackLinks } from "../data/stackLinks.js"

export function getProjectStackLinks(libs, additional, main) {

    // get sorted keys of links
    const libsLinksKeys       = Object.keys(stackLinks.libsLinks).sort();
    const additionalLinksKeys = Object.keys(stackLinks.additionalLinks).sort();
    const baseLinksKeys       = Object.keys(stackLinks.baseLinks).sort();

    // get sorted of each stack lists type keys (it will be used to coincidence with sorted links from stackLinks)
    const libsList       = libs.map(key => key.toLowerCase()).sort();
    const additionalList = additional.map(key => key.toLowerCase()).sort();
    const baseList       = main.map(key => key.toLowerCase()).sort();

      // find Coincidences between links and stack lists
    const CoincidenceLibsNames       = libsLinksKeys.filter(lib => libsList.includes(lib))
    const CoincidenceAdditionalNames = additionalLinksKeys.filter(elem => additionalList.includes(elem))
    const CoincidenceBaseNames       = baseLinksKeys.filter(elem => baseList.includes(elem))

      // lists of links according to list of stack 
    const CoincidenceLinksInProject           = CoincidenceLibsNames.map(key => stackLinks.libsLinks[key])
    const CoincidenceAdditionalLinksInProject = CoincidenceAdditionalNames.map(key => stackLinks.additionalLinks[key])
    const CoincidenceBaseLinksInProject       = CoincidenceBaseNames.map(key => stackLinks.baseLinks[key])


    return {CoincidenceLinksInProject, CoincidenceAdditionalLinksInProject, CoincidenceBaseLinksInProject}
}