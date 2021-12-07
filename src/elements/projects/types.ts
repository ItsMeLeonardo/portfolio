import { IconType, ImageType } from '../utils/Types'

export type Technology = {
  name: string
  icon: IconType
}

export type Project = {
  title: string
  image: ImageType
  technologies: Technology[]
}
