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
  open: boolean = true

  @property()
  private projects: Project[] = projects.projects

  @property({ type: String })
  titleProject = 'Gif Party'

  toggleModal() {
    console.log(this.open)
    this.open = !this.open
    this.requestUpdate()
  }

  render() {
    const project = this.projects.find(
      (project) => project.title === this.titleProject,
    )

    if (!this.open) {
      console.log('close')
      return
    }

    return html`
      <section class="Modal-layout">
        <div class="Modal glass-light">
          <header class="Modal-header" @click="${this.toggleModal}">
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
