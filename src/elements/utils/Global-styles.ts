import { css } from 'lit'

import { tabletGlobalStyles } from './tablet-global-styles'
import { desktopGlobalStyles } from './desktop-global-styles'
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    .w-full {
      width: 100%;
    }

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

    .isLoading {
      position: relative;
      pointer-events: none;
    }
    .isLoading::after {
      --size: 50%;
      content: '';
      position: absolute;
      top: 25%;
      left: 25%;
      width: var(--size);
      height: var(--size);
      border-radius: var(--small-radius);
      background: url('/icons/svg/logo-dark.svg') no-repeat center/contain;
    }

    .isLoading::before {
      --size: 100%;
      content: '';
      position: absolute;
      width: var(--size);
      height: var(--size);
      z-index: var(--front);
      top: 0;
      left: 0;
      background: linear-gradient(270deg, #ff8e3c, #d9376e);
      background-size: 400% 400%;
      mix-blend-mode: screen;
      -webkit-animation: loading 3s ease infinite;
      -moz-animation: loading 3s ease infinite;
      animation: loading 3s ease infinite;
    }

    @-webkit-keyframes loading {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    @-moz-keyframes loading {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    @keyframes loading {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }

    /*TOAST*/
    .Toast {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 280px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: var(--front);
      padding: 0.5rem;
      transition: opacity var(--transition);
      border-radius: var(--small-radius);
      box-shadow: var(--pale-dark-shadow);
    }
    .Toast-content {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      border-radius: var(--small-radius);
    }
    .Toast-text {
      color: var(--text);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .Toast-text-title {
      font: var(--card-small-title);
      font-size: 0.85rem;
    }
    .Toast-text-body {
      font: var(--btn-font);
      font-size: 0.75rem;
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

    /* ---- icon styles ---- */
    .icon-size-1 {
      --size: 1rem;
      width: var(--size);
      height: var(--size);
    }
    .icon-size-1-5 {
      --size: 1.5rem;
      width: var(--size);
      height: var(--size);
    }
    .icon-size-2 {
      --size: 2rem;
      width: var(--size);
      height: var(--size);
    }
  `,
  tabletGlobalStyles,
  desktopGlobalStyles,
]
