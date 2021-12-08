import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../utils/Icon-Picture'
import { styles } from './styles'

import type { Technology } from './types'
import type { ImageType } from '../utils/Types'

const imagePath = '/images'
const iconPath = '/icons'
@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = styles

  @property({ type: String })
  title = ''

  @property()
  image: ImageType | undefined

  @property()
  technologies: Technology[] = []

  render() {
    return html`
      <div class="ProjectCard">
        <picture class="ProjectCard-image">
          <source
            type="image/webp"
            srcset="${imagePath}/png/${this.image?.png}"
          />
          <img
            src="${imagePath}/webp/${this.image?.webp}"
            alt="${this.title} screen demo"
          />
        </picture>

        <aside class="Project-tech">
          ${this.technologies.map(
            (technology) => html`
              <picture class="glass-light IconContent">
                <source
                  type="image/png"
                  srcset="${iconPath}/png/${technology.icon.png}"
                />
                <source
                  type="image/webp"
                  srcset="${iconPath}/webp/${technology.icon.webp}"
                />
                <img
                  src="${iconPath}/svg/${technology.icon.svg}"
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
