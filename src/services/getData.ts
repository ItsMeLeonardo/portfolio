import type { TechGrouped } from '../elements/skills/types'
import type { Project } from '../elements/projects/types'
import { rangeDaysCompleted } from './timeCompleted'
import { getStorageItem, saveStorage } from '../utils/handleLocalStorage'

// const baseUrl = import.meta.env.VITE_PROJECT_API_URL

const PROJECT_STORAGE_KEY = 'projects-portfolio'
const TECH_STORAGE_KEY = 'tech-portfolio'

export const getProjects = async (): Promise<[Project[] | null, any]> => {
  try {
    // We prevent unnecessary API calls from being made
    const projectStored: Project[] = getStorageItem(PROJECT_STORAGE_KEY)
    if (projectStored && !rangeDaysCompleted(30)) {
      return [projectStored, null]
    }
    const module = await import('../data/projects')
    const projects: Project[] = module.default as Project[]

    /*    
    const res: Response = await fetch(`${baseUrl}/projects`)
    
    if (res.status === 404) {
      throw new Error('Projects not found')
    }
    
    const projects: Project[] = await res.json()

    if (!Array.isArray(projects)) {
      throw new Error('Error getting projects')
    }
    */

    saveStorage(PROJECT_STORAGE_KEY, projects)
    return [projects, null]
  } catch (error) {
    return [null, error]
  }
}

export const getTechnologies = async (): Promise<[TechGrouped | null, any]> => {
  try {
    // We prevent unnecessary API calls from being made
    const techStored: TechGrouped = getStorageItem(TECH_STORAGE_KEY)
    if (techStored && !rangeDaysCompleted(30)) {
      console.log({ techStored })
      return [techStored, null]
    }
    const module = await import('../data/technologies')
    const technologies: TechGrouped = module.default
    /*    
    const res: Response = await fetch(`${baseUrl}/tech/grouped`)
    if (res.status === 404) {
      throw new Error('Projects not found')
    }
    const technologies: TechGrouped = await res.json()
 */
    saveStorage(TECH_STORAGE_KEY, technologies)

    return [technologies, null]
  } catch (error) {
    return [null, error]
  }
}
