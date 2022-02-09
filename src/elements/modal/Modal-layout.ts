import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './styles'

import { Project } from '../projects/types'
import { getProjects } from '../../services/getData'

import './Section-image'
import './Section-info'

//@ts-ignore
import data from '../../data/project.json'

@customElement('modal-layout')
export class ModalLayout extends LitElement {
  static styles = styles

  @property()
  private projects: Project[] = []

  @property({ type: String })
  titleProject = ''

  @property({ type: Function })
  toggleModal: Function = () => {}

  @property({ type: Boolean })
  isOpen = false

  private hiddenModal() {
    this.toggleModal()
    this.isOpen = false
    document.body.style.overflow = 'auto'
  }
  private async getProjects() {
    const [projects, error] = await getProjects()
    if (error || !projects) {
      // if have error, we find the projects from local data
      console.error({ error, origin: 'modal' })
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
    if (this.projects.length === 0) {
      return
    }

    const project = this.projects.find(
      (project) => project.title === this.titleProject,
    )

    if (!this.isOpen) {
      return null
    }

    return html`
      <section class="Modal-layout">
        <div class="Modal">
          <header class="Modal-header" @click="${this.hiddenModal}">
            <h2 class="Modal-title">Project Detail</h2>

            <icon-picture
              paramIcon="close"
              className="close-modal"
              alt="close menu"
            />
          </header>

          <article class="Modal-body">
            <div class="Modal-section image">
              <section-image .screens="${project?.screens}" />
            </div>

            <div class="Modal-section info">
              <section-info
                class="Modal-section"
                .repo="${project?.repo}"
                .website="${project?.website}"
                .title="${project?.title}"
                .description="${project?.description}"
                .technologies="${project?.technologies}"
                .softSkills="${project?.softSkills}"
              />
            </div>
          </article>
        </div>
      </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'modal-layout': ModalLayout
  }
}
