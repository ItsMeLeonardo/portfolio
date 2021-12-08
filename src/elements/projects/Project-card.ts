import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../utils/Icon-Picture'

import type { Technology } from './types'
import type { ImageType } from '../utils/Types'

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
    return html`
      <link rel="stylesheet" href="src/styles/index.css" />
      <div class="ProjectCard">
        <picture class="ProjectCard-image">
          <source
            type="image/webp"
            srcset="${this.imagePath}/png/${this.image?.png}"
          />
          <img
            src="${this.imagePath}/webp/${this.image?.webp}"
            alt="${this.title} screen demo"
          />
        </picture>

        <aside class="Project-tech">
          ${this.technologies.map(
            (technology) => html`
              <picture class="glass-light IconContent">
                <source
                  type="image/png"
                  srcset="${this.iconPath}/png/${technology.icon.png}"
                />
                <source
                  type="image/webp"
                  srcset="${this.iconPath}/webp/${technology.icon.webp}"
                />
                <img
                  src="${this.iconPath}/svg/${technology.icon.svg}"
                  alt="${technology.name}"
                />
              </picture>
            `,
          )}
        </aside>

        <footer class="ProjectCard-footer glass-light">
          <h3 class="ProjectCard-title">${this.title}</h3>
          <a href="#" class="Button Button--link">
            See details

            <icon-picture
              paramIcon="arrow-right"
              alt="arrow right"
              className="IconContent"
            />
          </a>
        </footer>
      </div>
    `
  }
}
