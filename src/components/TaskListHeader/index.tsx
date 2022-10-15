import { useEffect, useState } from 'react';
import { Task } from '../../@types/Task';

import styles from './styles.module.css';

interface TaskListHeaderProps {
  taskList: Task[];
}

export function TaskListHeader ({ taskList }: TaskListHeaderProps) {
  const [numberOfTasksCompleted, setNumberOfTasksCompleted] = useState(0);

  // whenever taskList is changed, update the number of completed tasks
  useEffect(() => {
    const tasksCompleted = taskList.filter(task => task.completed);
    setNumberOfTasksCompleted(tasksCompleted.length)
  }, [taskList]);

  return (
    <header className={styles.container}>
      <div className={styles.createdTasks}>
        <strong>Created tasks</strong>
        <span>{taskList.length}</span>
      </div>
      <div className={styles.completedTasks}>
        <strong>Completed</strong>
        <span>{numberOfTasksCompleted}</span>
      </div>
    </header>
  );
}
