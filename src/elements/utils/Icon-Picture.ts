import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const iconPath = '/icons'

@customElement('icon-picture')
export class IconPicture extends LitElement {
  @property({ type: String })
  paramIcon = ''

  @property({ type: String })
  alt = ''

  @property({ type: String })
  className = ''

  render() {
    const icon = this.paramIcon.includes('.')
      ? this.paramIcon.split('.')[0]
      : this.paramIcon

    return html`
      <picture class=${this.className}>
        <source type="image/png" srcset="${iconPath}/png/${icon}.png" />
        <source type="image/webp" srcset="${iconPath}/webp/${icon}.webp" />
        <img src="${iconPath}/svg/${icon}.svg" alt="${this.alt}" />
      </picture>
    `
  }
}
