import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './Skill-list'

import type { Skills } from './types'
// @ts-ignore
import skills from '../../data/skills.json'

@customElement('skill-content')
export class SkillContent extends LitElement {
  @property()
  skills: Skills = skills.skills

  render() {
    return html`
      <link rel="stylesheet" href="src/styles/index.css" />
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
