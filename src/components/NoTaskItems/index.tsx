import clipboardIcon from '../../assets/Clipboard.svg';

import styles from './styles.module.css';

export function NoTaskItems () {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} alt="Clipboard icon" />
      <div className={styles.message}>
        <h3>You don't have any tasks</h3>
        <p>Create tasks and organize your todo's</p>
      </div>
    </div>
  );
}
