import { Media } from '../utils/Types'

export type Technology = {
  id: string
  name: string
  icon: Media
  expertise: string
  webpage: string
}

export type Project = {
  id: string
  title: string
  description: string
  website: string
  repo: string
  softSkills: string[]

  demo: Media
  poster: Media
  screens: Media[]

  technologies: Technology[]
}
