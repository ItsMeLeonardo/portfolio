export type IconType = {
  svg: string
  png: string
  webp: string
}

export type ImageType = {
  png: string
  webp: string
}

export type Technology = {
  name: string
  icon: IconType
}

export type Project = {
  title: string
  image: ImageType
  technologies: Technology[]
}
