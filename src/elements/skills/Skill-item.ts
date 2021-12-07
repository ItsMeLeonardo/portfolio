import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import type { IconType } from '../utils/Types'

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
      <a href="${this.url}" target="_blank">
        <figure class="skill-data">
          <picture class="skill-icon">
            <img src="/icons/svg/${this.icon?.svg}" alt="${this.name} logo" />
          </picture>
          <figcaption class="skill-name">${this.name}</figcaption>
        </figure>
      </a>
    `
  }
}
