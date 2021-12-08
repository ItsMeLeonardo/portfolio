import { css } from 'lit'

export const responsiveStyles = [
  css`
    /* media queries TABLET*/
    @media (min-width: 768px) {
      /* ---- My projects ---- */
      .ProjectCard {
        width: 316px;
      }

      .Project-tech {
        bottom: 4.5rem;
      }
    }

    /* ---- Desktop ---- */
    @media screen and (min-width: 1200px) {
      /* ---- My projects ---- */
      .ProjectCard {
        width: 380px;
      }
    }
  `,
]
