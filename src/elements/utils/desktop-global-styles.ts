import { css } from 'lit'

export const desktopGlobalStyles = [
  css`
    @media (min-width: 1200px) {
      /* ---- TOAST ---- */
      .Toast {
        margin-left: calc((100vw - 1200px) / 2);
      }
    }
  `,
]
