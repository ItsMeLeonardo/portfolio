import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'
import './Skill-list'

import type { Technology } from './types'
// @ts-ignore
import techGroupedData from '../../data/skills.json'

@customElement('skill-content')
export class SkillContent extends LitElement {
  static styles = styles

  @property()
  comingSoon: Technology[] = techGroupedData.technologies.comingSoon

  @property()
  medium: Technology[] = techGroupedData.technologies.medium

  @property()
  advanced: Technology[] = techGroupedData.technologies.advanced

  render() {
    console.log(this.comingSoon, this.medium, this.advanced)

    return html`
      <div class="Skills-content">
        <skill-list
          .techList=${this.advanced.slice(0, 6)}
          headline="Technologies I master"
        ></skill-list>

        <skill-list
          .techList=${this.medium.slice(0, 6)}
          headline="I have worked with"
        ></skill-list>

        <skill-list
          .techList=${this.comingSoon.slice(0, 6)}
          headline="I would like to learn"
        ></skill-list>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'skill-content': SkillContent
  }
}
