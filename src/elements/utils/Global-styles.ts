import { css } from 'lit'

import { tabletGlobalStyles } from './tablet-global-styles'
export const globalStyles = [
  css`
    *,
    ::after,
    ::before {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border: none;
      list-style: none;
      text-decoration: none;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: var(--main-font);
      background: var(--main-bg);
      scroll-behavior: smooth;
      min-height: 100vh;
      display: flex;
      justify-content: center;
    }

    ::-moz-selection {
      background: var(--primary);
      color: var(--white);
    }

    ::selection {
      background: var(--primary);
      color: var(--white);
    }

    textarea {
      resize: none;
    }
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

    .Button--primary {
      background: var(--primary);
      color: var(--white);
      box-shadow: var(--primary-shadow);
    }

    .Button--primary:active {
      box-shadow: var(--btn-active-shadow-primary);
    }

    .Button--gray {
      background: var(--gray);
      color: var(--text);
      box-shadow: var(--secondary-shadow);
    }

    .Button--gray:active {
      box-shadow: var(--btn-active-shadow-gray);
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

    /* BADGE*/
    .Badges-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .Badge-item {
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      background: var(--white);
      font-size: 1rem;
      box-shadow: var(--pale-dark-shadow);
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .Badge-item-icon.IconContent {
      --size: 1rem;
    }
  `,
  tabletGlobalStyles,
]
