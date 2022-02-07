import { Media } from '../utils/Types'

export type Technology = {
  expertise: string
  icon: Media
  webpage: string
  name: string
  id: string
}

export type TechGrouped = {
  comingSoon: Technology[]
  advanced: Technology[]
  medium: Technology[]
  other?: Technology[]
}
