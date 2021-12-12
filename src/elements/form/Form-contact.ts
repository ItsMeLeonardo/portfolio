import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'
import type { Contact } from '../service/contact'
import { sendMessage } from '../service/contact'

import './Field-group'
import './Form-field'
import '../utils/My-button'

@customElement('form-contact')
export class FormContact extends LitElement {
  static styles = styles

  @property()
  private contact: Contact = {
    name: '',
    email: '',
    message: '',
  }

  @property({ type: String })
  id = ''

  @property({ type: String })
  title = ''

  @property({ type: Object })
  error = {
    message: '',
    hasError: false,
  }

  handleBlur(event: Event) {
    // @ts-ignore
    const { name, value, error } = event.detail

    this.error.hasError = error.hasError
    this.error.message = error.message

    // @ts-ignore
    this.contact[name] = value
  }

  handleSubmit(event: Event) {
    event.preventDefault()
    if (!this.error.hasError) {
      sendMessage(this.contact)
        .then((response) => {
          console.log({ response })
          //TODO: clear field and show success message
        })
        .catch((error) => {
          this.error.message = error
          this.error.hasError = true
          this.requestUpdate()
        })
    }
  }

  render() {
    return html`
      <form
        action="#"
        class="Form Contact-form"
        id="${this.id}"
        @submit=${this.handleSubmit}
      >
        <header class="Form-title">
          <h3>${this.title}</h3>
        </header>
        <field-group class="w-full">
          <form-field
            label="Your name here"
            name="name"
            .isRequired=${true}
            class="w-full"
            @myEvent=${this.handleBlur}
          >
          </form-field>
          <form-field
            label="email@example.com"
            name="email"
            title="email"
            .isRequired=${true}
            class="w-full"
            .error=${this.error}
            @myEvent=${this.handleBlur}
          >
          </form-field>
        </field-group>

        <form-field
          label="Write your message here"
          name="message"
          .isRequired=${true}
          type="textarea"
          class="w-full"
          @myEvent=${this.handleBlur}
        >
        </form-field>

        <button class="Form-submit">
          <my-button label="Send message" type="primary" role="submit">
            <picture class="Form-icon">
              <img src="icons/svg/send.svg" alt="plane icon" />
            </picture>
          </my-button>
        </button>
      </form>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-contact': FormContact
  }
}
