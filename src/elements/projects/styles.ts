import { css } from 'lit'
import { globalStyles } from '../utils/Global-styles'
import { responsiveStyles } from './responsive-styles'

export const styles = [
  css`
    .Projects-content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .ProjectCard {
      --size: 280px;
      width: var(--size);
      height: var(--size);
      border-radius: var(--large-radius);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      box-shadow: var(--pale-dark-shadow);
    }

    .ProjectCard-image {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    }

    .ProjectCard-image img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    }

    .Project-tech {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      position: absolute;
      bottom: 4.25rem;
    }

    .Project-tech .IconContent {
      --delay: 0;
      --size: 40px;
      border-radius: var(--small-radius);
      position: relative;
      top: 4rem;
      transition: top var(--transition);
      transition-delay: var(--delay);
    }

    .Project-tech .IconContent img {
      --size: 24px;
    }

    .ProjectCard:hover .Project-tech .IconContent {
      top: 0;
    }

    .ProjectCard-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
      min-height: 60px;
    }

    .ProjectCard-footer .Button--link {
      opacity: 0.4;
    }

    .ProjectCard-footer:hover .Button--link {
      opacity: 1;
    }

    .ProjectCard-footer:hover .IconContent {
      transform: translateX(0.25rem);
    }

    .ProjectCard-title {
      font: var(--subtitle);
      margin-left: 0.5rem;
    }
  `,
  globalStyles,
  responsiveStyles,
]
