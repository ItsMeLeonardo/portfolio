import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './Skill-item'

import type { SkillsType } from './types'

@customElement('skill-list')
export class SkillList extends LitElement {
  @property()
  skills: SkillsType | undefined

  render() {
    return html`
      <link rel="stylesheet" href="src/styles/index.css" />
      <article class="Skills-type">
        <header class="skills-title">
          <h3 class="skills-title">${this.skills?.title}</h3>
          <ul class="Skills-list">
            ${this.skills?.technologies.map(
              (skill) => html`
                <skill-item
                  .name=${skill.name}
                  .url=${skill.url}
                  .icon=${skill.icon}
                />
              `,
            )}
          </ul>
        </header>
      </article>
    `
  }
}
