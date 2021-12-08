import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './styles'

import './Project-card'

import type { Project } from './types'
// @ts-ignore
import data from '../../data/project.json'

@customElement('project-content')
export class ProjectContent extends LitElement {
  static styles = styles

  @property()
  projects: Project[] = data.projects

  render() {
    return html`
      <article class="Projects-content">
        ${this.projects.map(
          (project: Project) => html`
            <project-card
              .title=${project.title}
              .image=${project.image}
              .technologies=${project.technologies}
            />
          `,
        )}
      </article>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'project-content': ProjectContent
  }
}
