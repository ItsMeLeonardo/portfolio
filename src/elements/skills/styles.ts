import { css } from 'lit'
import { globalStyles } from '../utils/Global-styles'
import { responsiveStyles } from './responsive-styles'

export const styles = [
  css`
    .Skills-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      margin-top: 0.75rem;
      justify-content: center;
    }
    .Skills-type {
      background: var(--white);
      border-radius: var(--small-radius);
      padding: 0.5rem;
      width: 100%;
    }

    .skills-title {
      font: var(--subtitle);
      color: var(--text);
    }

    .Skills-list {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
      padding: 1rem 0.5rem;
      gap: 1.25rem;
    }

    .skill-data {
      --size: 80px;
      width: var(--size);
      height: var(--size);
      border-radius: var(--small-radius);
      transition: box-shadow var(--transition);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      overflow: hidden;
      position: relative;
    }

    .skill-icon {
      --size: 60px;
      width: var(--size);
      height: var(--size);
      transition: width var(--transition), height var(--transition),
        transform var(--transition);
    }

    .skill-icon img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    }

    .skill-name {
      font: var(--card-small-title);
      color: var(--text);
      position: absolute;
      bottom: -1rem;
      transition: bottom var(--transition);
    }

    .Skill-item {
      position: relative;
      border-radius: var(--small-radius);
      box-shadow: 0 0 0 transparent;
      transition: box-shadow var(--transition);
    }

    .Skill-item:hover .skill-name {
      bottom: 0.5rem;
    }

    .Skill-item:hover .skill-icon {
      --size: 40px;
      transform: translateY(-0.5rem);
    }

    .Skill-item:hover {
      box-shadow: var(--pale-dark-shadow);
    }

    .Skill-item:active {
      box-shadow: inset 0 0 1.2rem rgba(42, 42, 42, 0.1);
    }
  `,
  globalStyles,
  responsiveStyles,
]
