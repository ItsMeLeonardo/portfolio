import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'
import './Skill-list'

import type { TechGrouped } from './types'
// @ts-ignore
import techGroupedLocal from '../../data/technologies.json'
import { getTechnologies } from '../../services/getData'

@customElement('skill-content')
export class SkillContent extends LitElement {
  static styles = styles

  @property()
  skills: TechGrouped | undefined

  async getTechnologies() {
    const [technologies, error] = await getTechnologies()
    if (error || !technologies) {
      console.log({ error, origin: 'getTechnologies' })
      this.skills = techGroupedLocal.technologies
      return
    }
    this.skills = technologies
  }

  protected firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>,
  ): void {
    this.getTechnologies()
  }

  render() {
    return html`
      <div class="Skills-content">
        <skill-list
          .techList=${this.skills?.advanced?.slice(0, 6)}
          headline="Technologies I master"
        ></skill-list>

        <skill-list
          .techList=${this.skills?.medium?.slice(0, 6)}
          headline="I have worked with"
        ></skill-list>

        <skill-list
          .techList=${this.skills?.comingSoon?.slice(0, 6)}
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
