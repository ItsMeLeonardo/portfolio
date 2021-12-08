import { css } from 'lit'

export const responsiveStyles = [
  css`
    /* media queries TABLET*/
    @media (min-width: 768px) {
      /* ---- My skills ---- */
      .Skills-content {
        justify-content: center;
        gap: 1.5rem;
      }

      .Skills-type {
        width: 316px;
      }
    }
    /* ---- Desktop ---- */
    @media screen and (min-width: 1200px) {
      /* ---- My skills ---- */
      .Skills-type {
        width: 380px;
      }
    }
  `,
]
