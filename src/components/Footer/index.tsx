import { GithubLogo } from 'phosphor-react';

import styles from './styles.module.css';
import reactIcon from '../../assets/react.svg';

export function Footer () {
  return (
    <footer className={styles.container}>
      <p className="global__wrapper">
        <span>Developed by <a className={styles.link} href="https://github.com/LuizPelegrini" target="_blank">Luiz Guilherme</a></span>
        <span>
          Powered by <a href='https://react.com'>
            <img className={styles.image} src={reactIcon} alt="React icon" />
          </a>
        </span>
      </p>
    </footer>
  );
}
