import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './styles'

import { Project } from '../projects/types'

import './Section-image'
import './Section-info'
//@ts-ignore
import projects from '../../data/project.json'

@customElement('modal-layout')
export class ModalLayout extends LitElement {
  static styles = styles

  @property()
  private projects: Project[] = projects.projects

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

  render() {
    const project = this.projects.find(
      (project) => project.title === this.titleProject,
    )

    if (!this.isOpen) {
      return null
    }

    return html`
      <section class="Modal-layout">
        <div class="Modal glass-light">
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
                .links="${project?.links}"
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
