import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../utils/Icon-Picture'
import '../modal/Modal-layout'
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

  @property()
  showModal: boolean = false

  toggleModal() {
    this.showModal = !this.showModal
    document.body.style.overflow = 'hidden'
  }

  render() {
    const modal = this.showModal
      ? html`<modal-layout
          titleProject="${this.title}"
          .toggleModal=${this.toggleModal}
          .isOpen=${this.showModal}
        ></modal-layout>`
      : null

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
          <button
            class="Button Button--link see-detail"
            @click="${this.toggleModal}"
          >
            See details

            <icon-picture
              paramIcon="arrow-right"
              alt="arrow right"
              class="icon-size-1-5"
            />
          </button>
        </footer>
      </div>
      ${modal}
    `
  }
}
