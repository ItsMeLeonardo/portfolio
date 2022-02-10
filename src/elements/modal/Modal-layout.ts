import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './styles'

import { Project } from '../projects/types'

import './Section-image'
import './Section-info'

@customElement('modal-layout')
export class ModalLayout extends LitElement {
  static styles = styles

  @property()
  project: Project | undefined

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
    if (!this.isOpen || !this.project) {
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
            ></icon-picture>
          </header>

          <article class="Modal-body">
            <div class="Modal-section image">
              <section-image
                .screens="${this.project?.screens}"
              ></section-image>
            </div>

            <div class="Modal-section info">
              <section-info
                class="Modal-section"
                .repo="${this.project?.repo}"
                .website="${this.project?.website}"
                .title="${this.project?.title}"
                .description="${this.project?.description}"
                .technologies="${this.project?.technologies}"
                .softSkills="${this.project?.softSkills}"
              ></section-info>
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
