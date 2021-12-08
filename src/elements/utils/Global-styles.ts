import { css } from 'lit'

export const globalStyles = [
  css`
    /* ---- glass effect ---- */
    .glass-light {
      -webkit-backdrop-filter: blur(6px) saturate(120%) contrast(45%)
        brightness(130%);
      backdrop-filter: blur(6px) saturate(120%) contrast(45%) brightness(130%);
      background: var(--white-to-glass);
    }

    /* ---- buttons ---- */
    .Button {
      padding: 0.5rem;
      cursor: pointer;
      border-radius: var(--small-radius);
      font: var(--btn-font);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 0 0 0 transparent;
      transition: box-shadow var(--transition);
    }

    .Button:hover {
      box-shadow: var(--btn-hover-shadow);
    }

    .Button:active {
      box-shadow: var(--btn-active-shadow);
    }

    .Button--primary {
      background: var(--primary);
      color: var(--white);
      box-shadow: var(--primary-shadow);
    }

    .Button--secondary {
      background: var(--secondary);
      color: var(--text);
      box-shadow: var(--secondary-shadow);
    }

    .Button--link {
      background: transparent;
      color: var(--secondary);
      box-shadow: none;
      font-size: 0.85rem;
      gap: 0.25rem;
    }

    /* ---- utils and global styles ----*/
    .hidden {
      display: none !important;
      opacity: 0;
      transition: opacity var(--transition);
    }

    .IconContent {
      --size: 2rem;
      width: var(--size);
      height: var(--size);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: var(--transition);
    }

    .IconContent img {
      --size: 100%;
      width: var(--size);
      height: var(--size);
      -o-object-fit: cover;
      object-fit: cover;
      background-position: center;
    }

    .titleSection {
      font: var(--section-title);
      color: var(--primary);
      margin-bottom: 2rem;
    }

    .paragraph {
      font: var(--paragraph);
      color: var(--text);
      line-height: 25px;
    }

    .section {
      margin-top: 4rem;
      display: block;
      text-align: center;
    }
  `,
]
