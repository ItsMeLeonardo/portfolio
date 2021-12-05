import { html, LitElement, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import './elements/social-icons'

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css`
    .when {
      height: 200vh;
    }
  `
  render() {
    return html`
      <section>
        <app-navbar></app-navbar>
        <div class="when">lo</div>
        <article id="Home">
          <h1>Home</h1>
        </article>
      </section>
    `
  }
}
