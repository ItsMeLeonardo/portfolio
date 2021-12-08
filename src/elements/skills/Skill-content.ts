import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'
import './Skill-list'

import type { Skills } from './types'
// @ts-ignore
import skills from '../../data/skills.json'

@customElement('skill-content')
export class SkillContent extends LitElement {
  static styles = styles

  @property()
  skills: Skills = skills.skills

  render() {
    return html`
      <div class="Skills-content">
        <skill-list .skills=${this.skills.types.master}></skill-list>
        <skill-list .skills=${this.skills.types.learning}></skill-list>
        <skill-list .skills=${this.skills.types.future}></skill-list>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'skill-content': SkillContent
  }
}
