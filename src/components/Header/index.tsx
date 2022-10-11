import styles from './styles.module.css';
import logo from '../../assets/rocket.svg';

export function Header () {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logo} alt="rocket icon" />
        <h1><span>to</span>do</h1>
      </div>
    </header>
  );
}
