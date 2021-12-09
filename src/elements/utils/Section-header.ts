import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('section-header')
export class SectionHeader extends LitElement {
  @property({ type: String })
  title: string = ''

  render() {
    return html`
      <header class="titleSection">
        <h2 class="Project-title">${this.title}</h2>
      </header>
    `
  }
}
