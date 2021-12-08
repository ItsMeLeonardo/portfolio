import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './Project-card'

import type { Project } from './types'
// @ts-ignore
import data from '../../data/project.json'

@customElement('project-content')
export class ProjectContent extends LitElement {
  @property()
  projects: Project[] = data.projects

  render() {
    return html`
      <link rel="stylesheet" href="src/styles/index.css" />
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
