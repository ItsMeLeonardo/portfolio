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

  handleBlur(event: Event) {
    // @ts-ignore
    const { name, value } = event.detail
    // @ts-ignore
    this.contact[name] = value
  }

  // TODO: add validation and handle errors
  handleSubmit(event: Event) {
    event.preventDefault()

    sendMessage(this.contact)
  }

  render() {
    console.log('render')
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
            @myEvent=${this.handleBlur}
          >
          </form-field>
        </field-group>

        <form-field
          label="Write here"
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
