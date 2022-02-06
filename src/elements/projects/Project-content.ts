import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './styles'

import './Project-card'

import type { Project } from './types'
// @ts-ignore
import data from '../../data/project.json'
import { getProjects } from '../../services/getData'

@customElement('project-content')
export class ProjectContent extends LitElement {
  static styles = styles

  @property()
  projects: Project[] = []

  private async getProjects() {
    const [projects, error] = await getProjects()
    if (error) {
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
    console.log({ projects: this.projects })

    return html`
      <article class="Projects-content">
        ${this.projects.map(
          (project: Project) => html`
            <project-card
              .title=${project.title}
              .demo=${project.demo}
              .technologies=${project.technologies}
              .poster=${project.poster}
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
