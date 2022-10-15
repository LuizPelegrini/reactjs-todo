import styles from './styles.module.css';
import { Trash } from 'phosphor-react';

interface TaskListItemProps {
  id: string;
}

export function TaskListItem ({ id }: TaskListItemProps) {
  return (
    <div className={styles.container}>
      <input id={`task_${id}`} type="checkbox" />
      <label htmlFor={`task_${id}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio debitis quo reiciendis commodi animi, tempora dolor fugit sit sed.
      </label>
      <button type="button">
        <Trash size={16} />
      </button>
    </div>
  );
}
