import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { globalStyles } from './Global-styles'

@customElement('my-toast')
export class MyToast extends LitElement {
  static styles = globalStyles

  @property({ type: String })
  title = 'My toast'

  @property({ type: String })
  body: string = 'Hello World'

  @property({ type: Boolean })
  show = true

  private closeToast() {
    this.show = false
  }

  render() {
    return html`
      <div
        class="Toast glass-light ${this.show ? '' : 'hidden'}"
        role="button"
        @click=${this.closeToast}
      >
        <div class="Toast-content ">
          <p class="Toast-text">
            <span class="Toast-text-title">${this.title}</span>
            <span class="Toast-text-body">${this.body}</span>
          </p>
          <picture class="Toast-icon">
            <img src="icons/svg/check-success.svg" alt="Check icon" />
          </picture>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-toast': MyToast
  }
}
