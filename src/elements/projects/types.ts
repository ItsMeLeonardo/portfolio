import { IconType, ImageType } from '../utils/Types'

export type Technology = {
  name: string
  icon: IconType
}

export type Project = {
  title: string
  image: ImageType
  technologies: Technology[]
  screens: ImageType[]
  softSkills: string[]
  description: string
  links: Links
}

export type Links = {
  website: string
  repo: string
}
