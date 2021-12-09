import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const imagePath = '/images'

@customElement('image-picture')
export class ImagePicture extends LitElement {
  @property({ type: String })
  paramImage = ''

  @property({ type: String })
  alt = ''

  @property({ type: String })
  className = ''

  render() {
    console.log(this.className)
    const image = this.paramImage.includes('.')
      ? this.paramImage.split('.')[0]
      : this.paramImage

    const alter = this.alt.trim().length > 0 ? this.alt : image

    return html`
      <picture class=${this.className}>
        <source type="image/png" srcset="${imagePath}/png/${image}.png" />
        <img src="${imagePath}/webp/${image}.svg" alt="${alter}" />
      </picture>
    `
  }
}
