import { TechGrouped } from '../elements/skills/types'
import { Project } from '../elements/projects/types'
const baseUrl = import.meta.env.VITE_PROJECT_API_URL

export const getProjects = async (): Promise<[Project[] | null, any]> => {
  try {
    const res: Response = await fetch(`${baseUrl}/projects`)
    if (res.status === 404) {
      throw new Error('Projects not found')
    }

    const projects = await res.json()

    return [projects, null]
  } catch (error) {
    return [null, error]
  }
}

export const getTechnologies = async (): Promise<[TechGrouped | null, any]> => {
  try {
    const res: Response = await fetch(`${baseUrl}/tech/grouped`)
    if (res.status === 404) {
      throw new Error('Projects not found')
    }
    const technologies: TechGrouped = await res.json()

    return [technologies, null]
  } catch (error) {
    return [null, error]
  }
}
