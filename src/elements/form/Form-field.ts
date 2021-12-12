import { html, LitElement } from 'lit'
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

  @property({ type: Object })
  error = {
    message: '',
    hasError: false,
  }

  private verifyInput(value: string) {
    if (value.trim().length === 0) {
      this.error = {
        message: 'This field is required',
        hasError: true,
      }
    } else {
      this.error = {
        message: '',
        hasError: false,
      }
    }
  }

  onBlur(event: Event) {
    const input = event.target as HTMLInputElement
    const value = input.value

    this.verifyInput(value)

    if (this.error.hasError) return

    const detail = {
      name: this.name,
      value,
      error: this.error,
    }

    const myEvent = new CustomEvent('myEvent', {
      detail,
      bubbles: true,
      composed: true,
    })

    this.dispatchEvent(myEvent)
  }

  render() {
    const errorMessage = html`
      <span class="Form-error-message"> ${this.error.message} </span>
    `

    console.log(this.error)

    if (this.type === 'textarea') {
      return html`
        <div class="Form-field ${this.error.hasError ? 'Form-error' : ''}">
          <textarea
            name="${this.name}"
            id="${this.name}"
            class="Form-input"
            cols="30"
            rows="10"
            required=${this.isRequired}
            placeholder=" "
            @focusout=${this.onBlur}
          ></textarea>
          <label for="${this.name}" class="Form-label">${this.label}</label>
          ${this.error.hasError ? errorMessage : ''}
        </div>
      `
    }

    return html`
      <div class="Form-field ${this.error.hasError ? 'Form-error' : ''}">
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
        ${this.error.hasError ? errorMessage : ''}
      </div>
    `
  }
}
