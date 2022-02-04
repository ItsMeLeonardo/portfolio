import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'

import type { Media } from '../utils/Types'

@customElement('skill-item')
export class SkillItem extends LitElement {
  static styles = styles

  @property()
  url: string | undefined

  @property()
  techName: string | undefined

  @property()
  icon: Media | undefined

  render() {
    return html`
      <li class="Skill-item">
        <a href="${this.url}" target="_blank">
          <figure class="skill-data">
            <picture class="skill-icon">
              <img src="${this.icon?.url}" alt="${this.techName}" />
            </picture>
            <figcaption class="skill-name">${this.techName}</figcaption>
          </figure>
        </a>
      </li>
    `
  }
}
