import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './styles'

import './Project-card'

import type { Project } from './types'
import { getProjects } from '../../services/getData'
// @ts-ignore
import data from '../../data/project.json'

@customElement('project-content')
export class ProjectContent extends LitElement {
  static styles = styles

  @property({ type: Array })
  projects: Project[] = []

  private async getProjects() {
    const [projects, error] = await getProjects()
    if (error || !projects) {
      // if have error, we find the projects from local data
      console.error({ error, origin: 'getProjects' })
      this.projects = data.projects
      return
    }

    this.projects = projects
  }

  protected firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>,
  ): void {
    this.getProjects()
  }

  render() {
    if (!this.projects) {
      return
    }
    return html`
      <article class="Projects-content">
        ${this.projects.map(
          (project: Project) => html`
            <project-card
              .title=${project.title}
              .demo=${project.demo}
              .technologies=${project.technologies}
              .poster=${project.poster}
              .project=${project}
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
