import { TaskListItem } from '../TaskListItem';

import styles from './styles.module.css';

export function TaskList() {
  return (
    <ul className={styles.container}>
      {/*
        ['1', '2', '3'].map(elem =>
          <li className={styles.taskItem} key={elem}>
            <TaskListItem id={elem}/>
          </li>
        )
        */}
    </ul>
  );
}
