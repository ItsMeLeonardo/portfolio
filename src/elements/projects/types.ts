import { IconType, ImageType, VideoType } from '../utils/Types'

export type Technology = {
  name: string
  icon: IconType
}

export type Project = {
  title: string
  video: VideoType
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
