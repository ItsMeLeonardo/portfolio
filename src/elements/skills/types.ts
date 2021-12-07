import { IconType } from '../utils/Types'

export type Skills = {
  types: Types
}
export type Types = {
  master: SkillsType
  learning: SkillsType
  future: SkillsType
}

export type SkillsType = {
  title: string
  technologies: SkillTechnology[]
}

export type SkillTechnology = {
  name: string
  url: string
  icon: IconType
}
