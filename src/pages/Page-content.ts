import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('page-content')
export class PageContent extends LitElement {
  @property({ type: String })
  page = ''

  render() {
    switch (this.page) {
      case 'detail':
      default:
        return html`<slot></slot>`
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'page-content': PageContent
  }
}
