import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { globalStyles } from './Global-styles'

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = globalStyles

  @property({ type: String })
  label = 'Click me'

  @property({ type: String })
  type = 'primary'

  @property({ type: String })
  role: 'button' | 'reset' | 'submit' = 'button'

  render() {
    return html`
      <button
        role="button"
        type="${this.role}"
        class="Button Button--${this.type}"
      >
        ${this.label}
        <slot></slot>
      </button>
    `
  }
}
