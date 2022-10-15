import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

export function TaskCreateBar() {
  return (
    <form className={styles.container}>
      <input type="text" className={styles.taskInput} placeholder="Add new task"/>
      <button type="submit">
        Create
        <PlusCircle size={18}/>
      </button>
    </form>
  );
}
