import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Links, Technology } from '../projects/types'

import { styles } from './styles'

import '../utils/Icon-Picture'

@customElement('section-info')
export class SectionInfo extends LitElement {
  static styles = styles

  @property({ type: String })
  title = ''

  @property()
  links: Links | undefined

  @property({ type: String })
  description = ''

  @property()
  softSkills: string[] = []

  @property()
  technologies: Technology[] = []

  render() {
    const thisPageHaveWebsite =
      this.links?.website !== undefined ? '' : 'link-disabled'

    return html`
      <h2 class="Detail-title">${this.title}</h2>

      <div class="Detail-Buttons">
        <a
          href="${this.links?.website}"
          class="Button Button--primary ${thisPageHaveWebsite}"
          target="_blank"
        >
          View Website
          <icon-picture
            className="Detail-icon IconContent"
            alt="Eye icon"
            paramIcon="eye"
          />
        </a>
        <a
          href="${this.links?.repo}"
          class="Button Button--gray"
          target="_blank"
        >
          View Code
          <icon-picture
            className="Detail-icon IconContent"
            alt="github icon"
            paramIcon="github"
          />
        </a>
      </div>

      <div class="Detail-description">
        <h3 class="Detail-subTitle">About this project</h3>
        <p class="Detail-paragraph">${this.description}</p>
      </div>

      <div class="Detail-description">
        <h3 class="Detail-subTitle">Skills</h3>

        <ul class="Badges-list">
          ${this.softSkills.map(
            (skill) => html`
              <li class="Badge-item">
                <span class="Badges-content">${skill}</span>
              </li>
            `,
          )}
        </ul>
      </div>

      <div class="Detail-description">
        <h3 class="Detail-subTitle">Technologies</h3>

        <ul class="Badges-list">
          ${this.technologies.map(
            (tech) => html`
              <li class="Badge-item">
                <span class="Badges-content"> ${tech.name} </span>
                <icon-picture
                  paramIcon="${tech.icon.svg}"
                  className="Badge-item-icon IconContent"
                  alt="${tech.name} icon"
                />
              </li>
            `,
          )}
        </ul>
      </div>
    `
  }
}
