import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { styles } from './styles'
import type { Contact } from '../service/contact'
import { sendMessage } from '../service/contact'

import './Field-group'
import './Form-field'
import '../utils/My-button'
import '../utils/My-Toast'

@customElement('form-contact')
export class FormContact extends LitElement {
  static styles = styles

  @property({ type: Object })
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

  @property({ type: Boolean })
  isLoading = false

  @property({ type: Boolean })
  isSuccess = false

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
    if (this.error.hasError) {
      return
    }
    this.isLoading = true
    sendMessage(this.contact)
      .then((response) => {
        console.log({ response })
        this.isSuccess = true
        this.isLoading = false
      })
      .catch((error) => {
        console.log({ error })
        this.isLoading = false
        this.error = {
          message: error,
          hasError: true,
        }
      })
  }

  private createToast = () => {
    return html`
      <my-toast
        title="Thanks for your message"
        body="I'll get back to you as soon as possible"
      ></my-toast>
    `
  }

  render() {
    return html`
      ${this.isSuccess ? this.createToast() : ''}
      <form
        class="Form Contact-form ${this.isLoading ? 'isLoading' : ''}"
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
