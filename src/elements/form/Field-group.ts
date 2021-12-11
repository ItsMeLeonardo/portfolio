import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('field-group')
export class FieldGroup extends LitElement {
  static styles = [
    css`
      .Form-field-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        width: 100%;
      }

      /* media queries TABLET*/
      @media (min-width: 768px) {
        .Form-field-group {
          gap: 1.5rem;
          flex-direction: row;
        }
      }
    `,
  ]

  render() {
    return html`
      <div class="Form-field-group">
        <slot></slot>
      </div>
    `
  }
}
