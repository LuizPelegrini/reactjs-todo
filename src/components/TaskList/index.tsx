import { Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function TaskList() {
  return (
    <ul className={styles.container}>
      <li>
        <div className={styles.task}>
          <input id="task" type="checkbox" />
          <label htmlFor="task">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio debitis quo reiciendis commodi animi, tempora dolor fugit sit sed.
          </label>
          <button type="button">
            <Trash size={16} />
          </button>
        </div>
      </li>
    </ul>
  );
}
