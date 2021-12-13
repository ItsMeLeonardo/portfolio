import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../utils/Icon-Picture'
import '../modal/Modal-layout'
import { styles } from './styles'

import type { Technology } from './types'
import type { VideoType } from '../utils/Types'

const imagePath = '/images'
const iconPath = '/icons'
const videoPath = '/videos'

@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = styles

  @property({ type: String })
  title = ''

  @property()
  video: VideoType | undefined

  @property()
  technologies: Technology[] = []

  @property()
  showModal: boolean = false

  toggleModal() {
    this.showModal = !this.showModal
    document.body.style.overflow = 'hidden'
  }

  private playVideo(e: Event) {
    const video = e.target as HTMLVideoElement
    video.load()
    video.play().catch((error) => console.log({ error }))
  }

  private pauseVideo(e: Event) {
    const video = e.target as HTMLVideoElement

    video.pause()
  }

  private toggleVideo(e: Event) {
    const video = e.currentTarget as HTMLVideoElement
    if (video.paused) {
      video.play().catch((error) => console.log({ error }))
    } else {
      video.pause()
    }
  }

  render() {
    const modalDetail = this.showModal
      ? html`<modal-layout
          titleProject="${this.title}"
          .toggleModal=${this.toggleModal}
          .isOpen=${this.showModal}
        ></modal-layout>`
      : null

    return html`
      <div class="ProjectCard">
        <video
          class="ProjectCard-image"
          poster="${imagePath}/webp/${this.video?.poster}.webp"
          muted
          @mouseenter=${this.playVideo}
          @mouseleave=${this.pauseVideo}
          @click=${this.toggleVideo}
        >
          <source
            src="${videoPath}/mp4/${this.video?.name}.mp4"
            type="video/mp4"
          />
          <source
            src="${videoPath}/webm/${this.video?.name}.webm"
            type="video/webm"
          />
        </video>

        <aside class="Project-tech">
          ${this.technologies.map(
            (technology, index) => html`
              <picture
                class="glass-light IconContent"
                style="--delay: 0.${index + 1}s"
              >
                <source
                  type="image/png"
                  srcset="${iconPath}/png/${technology.icon.png}"
                />
                <source
                  type="image/webp"
                  srcset="${iconPath}/webp/${technology.icon.webp}"
                />
                <img
                  src="${iconPath}/svg/${technology.icon.svg}"
                  alt="${technology.name}"
                />
              </picture>
            `,
          )}
        </aside>

        <footer class="ProjectCard-footer glass-light">
          <h3 class="ProjectCard-title">${this.title}</h3>
          <button
            class="Button Button--link see-detail"
            @click="${this.toggleModal}"
          >
            See details

            <icon-picture
              paramIcon="arrow-right"
              alt="arrow right"
              class="icon-size-1-5"
            />
          </button>
        </footer>
      </div>
      ${modalDetail}
    `
  }
}
