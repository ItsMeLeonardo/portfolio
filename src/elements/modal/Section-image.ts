import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ImageType } from '../utils/Types'

import { styles } from './styles'

@customElement('section-image')
export class SectionImage extends LitElement {
  static styles = styles

  @property()
  screens: ImageType[] = []

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
                  <source type="image/png" srcset="images/png/${screen.png}" />
                  <img
                    src="images/webp/${screen.webp}"
                    alt="${screen.png.split('.')[0]}"
                  />
                </picture>
              </label>
            `,
          )}
        </div>
      </div>
    `
  }
}
