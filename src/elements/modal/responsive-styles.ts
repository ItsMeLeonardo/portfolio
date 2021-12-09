import { css } from 'lit'

export const responsiveStyles = [
  css`
    /* media queries TABLET*/
    @media (min-width: 768px) {
      /* ---- modal detail ---- */
      .Modal {
        padding: var(--padding-container);
        gap: 1rem;
      }

      .Detail-screens-content {
        height: 400px;
      }

      .Detail-screens {
        padding: 0 1rem 1rem 1rem;
        gap: 2rem;
        grid-template-rows: 80px;
      }

      .Detail-img img {
        border-radius: var(--small-radius);
      }

      .Detail-Buttons {
        justify-content: flex-start;
        gap: 1.5rem;
      }
    }

    @media screen and (min-width: 1024px) {
      .Modal {
        padding: 1rem 5rem;
      }

      .Detail-Buttons {
        gap: 2.5rem;
      }
    }

    /* ---- Desktop ---- */
    @media screen and (min-width: 1200px) {
      /* ---- Modal ----*/
      .Modal {
        padding: 1rem;
      }

      .Modal-body {
        flex-direction: row-reverse;
        padding: 0;
      }

      .Modal-section.image {
        width: 60%;
      }

      .Modal-section.info {
        width: 40%;
      }

      .Detail-screens-content {
        height: 450px;
        border-radius: var(--large-radius);
        overflow: hidden;
      }
    }
  `,
]
