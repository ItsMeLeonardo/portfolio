import { css } from 'lit'
import { globalStyles } from '../utils/Global-styles'
import { responsiveStyles } from './responsive-styles'

export const styles = [
  css`
    /* ---- modal detail ----*/

    .Modal-layout {
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index: var(--front);
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
    }

    .Modal {
      max-width: var(--max-width);
      width: 100%;
      height: 100%;
      padding: 1rem 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      overflow-y: scroll;
      background: var(--white);
    }

    .Modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .Modal-title {
      font-size: 1.5rem;
      color: var(--gray);
    }

    .close-modal {
      --size: 2rem;
      cursor: pointer;
      width: var(--size);
      height: var(--size);
      display: flex;
      padding: 0.25rem;
      justify-content: center;
      align-items: center;
      background: var(--secondary);
      border-radius: var(--large-radius);
    }

    .close-modal img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    }

    .Modal-body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }

    .Modal-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      text-align: start;
    }

    /* ---- Project detail ---- */

    .Detail-title {
      font: var(--project-title-detail);
    }

    .Detail-screens-content {
      height: 200px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      box-shadow: var(--pale-dark-shadow);
    }

    .Detail-screens {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      padding: 0 0.5rem 0.5rem 0.5rem;
      gap: 0.75rem;
      grid-template-rows: 40px;
    }

    .Detail-screens input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: none;
    }

    .Detail-screens {
      background: var(--white);
    }

    .Detail-img {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: var(--front);
    }

    .Detail-img img {
      transition: transform var(--transition);
      border-radius: 5px;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    }

    .Detail-screen img {
      border: 2px solid var(--primary);
      cursor: pointer;
    }

    .Detail-img::after {
      content: '';
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 50%,
        rgba(41, 41, 41, 0.358333) 72.4%,
        rgba(42, 42, 42, 0.5) 100%
      );
      mix-blend-mode: darken;
      transition: opacity var(--transition);
    }

    .Detail-input:checked ~ .Detail-img {
      box-shadow: var(--pale-dark-shadow);
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      pointer-events: none;
    }

    .Detail-input:checked ~ .Detail-img img {
      border: none;
    }

    .Detail-input:checked ~ .Detail-img::after {
      opacity: 1;
    }

    .Detail-Buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    .Detail-icon.IconContent {
      --size: 1.5rem;
    }

    .Detail-subTitle {
      font: var(--project-subtitle-detail);
    }

    .Detail-description {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  `,
  responsiveStyles,
  globalStyles,
]
