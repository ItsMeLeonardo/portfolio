import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'
import './Skill-item'

import type { Technology } from './types'

@customElement('skill-list')
export class SkillList extends LitElement {
  static styles = styles

  @property({ type: Array })
  techList: Technology[] = []

  @property()
  headline: string = ''

  render() {
    return html`
      <article class="Skills-type">
        <header class="skills-title">
          <h3 class="skills-title">${this.headline}</h3>
          <ul class="Skills-list">
            ${this.techList?.map(
              (tech) =>
                html`
                  <skill-item
                    .url="${tech.webpage}"
                    .techName="${tech.name}"
                    .icon=${tech.icon}
                  ></skill-item>
                `,
            )}
          </ul>
        </header>
      </article>
    `
  }
}
