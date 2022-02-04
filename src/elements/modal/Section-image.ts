import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Media } from '../utils/Types'

import { styles } from './styles'

@customElement('section-image')
export class SectionImage extends LitElement {
  static styles = styles

  @property()
  screens: Media[] = []

  render() {
    return html`
      <div class="Detail-screens-content">
        <div class="Detail-screens">
          ${this.screens.map(
            (screen, index) => html`
              <label for="screen-${index}" class="Detail-screen">
                <input
                  class="Detail-input"
                  type="radio"
                  name="detail-screen"
                  id="screen-${index}"
                  checked
                />
                <picture class="Detail-img">
                  <img src="${screen.url}" alt="${screen.name}" />
                </picture>
              </label>
            `,
          )}
        </div>
      </div>
    `
  }
}
