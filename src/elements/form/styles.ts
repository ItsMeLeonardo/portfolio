import { css } from 'lit'
import { globalStyles } from '../utils/Global-styles'

export const styles = [
  css`
    .Form {
      max-width: 500px;
    }

    .Form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }

    .Form-field {
      width: 100%;
      height: 100%;
      background: var(--main-bg);
      border-radius: var(--small-radius);
      position: relative;
      overflow: hidden;
    }

    .Form-label {
      position: absolute;
      top: 0.8rem;
      left: 0.8rem;
      color: var(--text);
      transition: var(--transition);
      opacity: 0.5;
    }

    .Form-label,
    .Form-input {
      font: var(--input-font);
    }

    .Form-input {
      padding: 0.8rem;
      width: 100%;
      background: transparent;
      height: 100%;
      outline: none;
      border-radius: inherit;
      border: 2px double transparent;
      transition: border var(--transition);
    }

    .Form-input:focus {
      border: 2px solid var(--primary);
    }

    .Form-input:focus + .Form-label {
      left: -100%;
      opacity: 0;
    }

    .Form-input:not(:-moz-placeholder-shown) + .Form-label {
      left: -100%;
    }

    .Form-input:not(:-ms-input-placeholder) + .Form-label {
      left: -100%;
    }

    .Form-input:not(:placeholder-shown) + .Form-label {
      left: -100%;
    }

    .Form-submit {
      align-self: flex-end;
    }

    .Form-icon {
      --size: 1.25rem;
      width: var(--size);
      height: var(--size);
    }

    .Form-icon img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    }

    @media (min-width: 768px) {
      .Form-title {
        padding-top: 0.75rem;
      }

      .Form {
        gap: 1.5rem;
      }
    }
  `,
  globalStyles,
]
