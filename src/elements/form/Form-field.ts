import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'

@customElement('form-field')
export class FormField extends LitElement {
  static styles = styles

  @property({ type: String })
  label: string = ''

  @property({ type: String })
  name: string = ''

  @property({ type: String })
  type: string = 'text'

  @property({ type: Boolean })
  isRequired = true

  onBlur(event: Event) {
    const input = event.target as HTMLInputElement
    const detail = {
      name: input.name,
      value: input.value,
    }

    const myEvent = new CustomEvent('myEvent', {
      detail,
      bubbles: true,
      composed: true,
    })

    this.dispatchEvent(myEvent)
  }

  render() {
    if (this.type === 'textarea') {
      return html`
        <div class="Form-field">
          <textarea
            name="${this.name}"
            id="${this.name}"
            class="Form-input"
            cols="30"
            rows="10"
            required=${this.isRequired}
            @focusout=${this.onBlur}
          ></textarea>
          <label for="${this.name}" class="Form-label">${this.label}</label>
        </div>
      `
    }

    return html`
      <div class="Form-field">
        <input
          type="${this.type}"
          id="${this.name}"
          name="${this.name}"
          placeholder=" "
          required=${this.isRequired}
          class="Form-input"
          @focusout=${this.onBlur}
        />
        <label for="${this.name}" class="Form-label"> ${this.label} </label>
      </div>
    `
  }
}
