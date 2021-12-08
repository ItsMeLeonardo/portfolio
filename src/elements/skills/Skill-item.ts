import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import type { IconType } from '../utils/Types'

const iconsPath = '/icons'

@customElement('skill-item')
export class SkillItem extends LitElement {
  @property({ type: String })
  name = ''

  @property({ type: String })
  url = ''

  @property()
  icon: IconType | undefined

  render() {
    return html`
      <link rel="stylesheet" href="src/styles/index.css" />
      <li class="Skill-item">
        <a href="${this.url}" target="_blank">
          <figure class="skill-data">
            <picture class="skill-icon">
              <source
                type="image/png"
                srcset="${iconsPath}/png/${this.icon?.png}"
              />
              <source
                type="image/webp"
                srcset="${iconsPath}/webp/${this.icon?.webp}"
              />
              <img
                src="${iconsPath}/svg/${this.icon?.svg}"
                alt="${this.name} logo"
              />
            </picture>
            <figcaption class="skill-name">${this.name}</figcaption>
          </figure>
        </a>
      </li>
    `
  }
}
