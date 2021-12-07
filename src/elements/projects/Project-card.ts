import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import type { ImageType, Technology } from './types'

@customElement('project-card')
export class ProjectCard extends LitElement {
  private imagePath: string = '/images'
  private iconPath: string = '/icons'

  @property({ type: String })
  title = ''
  @property()
  image: ImageType | undefined
  @property()
  technologies: Technology[] = []

  render() {
    console.log({ tech: this.technologies })
    return html`<div class="ProjectCard">
      <picture class="ProjectCard-image">
        <img
          src="${this.imagePath}/png/${this.image?.png}"
          alt="${this.title} screen demo"
        />
      </picture>

      <aside class="Project-tech">
        ${this.technologies.map(
          (technology) => html`
            <picture class="glass-light IconContent">
              <img
                src="${this.iconPath}/svg/${technology.icon.svg}"
                alt="${technology.name}"
              />
            </picture>
          `,
        )}
      </aside>

      <footer class="ProjectCard-footer glass-light">
        <h3 class="ProjectCard-title">My films</h3>
        <a href="#" class="Button Button--link">
          See details
          <picture class="IconContent">
            <img src="${this.iconPath}/svg/arrow-right.svg" alt="arrow right" />
          </picture>
        </a>
      </footer>
    </div>`
  }
}
