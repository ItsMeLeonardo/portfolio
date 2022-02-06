const baseUrl = import.meta.env.VITE_PROJECT_API_URL

export const getProjects = async () => {
  try {
    const res = await fetch(`${baseUrl}/projects`)
    const projects = await res.json()

    if (projects.statusCode === 404) {
      throw new Error('Projects not found')
    }
    return [projects, null]
  } catch (error) {
    return [null, error]
  }
}
