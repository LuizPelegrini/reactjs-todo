import styles from './styles.module.css';

export function TaskListHeader () {
  return (
    <header className={styles.container}>
      <div className={styles.createdTasks}>
        <strong>Created tasks</strong>
        <span>0</span>
      </div>
      <div className={styles.completedTasks}>
        <strong>Completed</strong>
        <span>0</span>
      </div>
    </header>
  );
}
