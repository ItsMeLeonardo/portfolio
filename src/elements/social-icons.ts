import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('social-icons')
export class Icons extends LitElement {
  @property()
  items = ['Home', 'About', 'Contact']

  protected render(): unknown {
    return html`
      <ul>
        ${this.items.map((item) => html`<a href="#">${item}</a>`)}
      </ul>
    `
  }
}
