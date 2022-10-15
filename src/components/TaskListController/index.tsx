import { useState } from 'react';

import { TaskCreateBar } from '../TaskCreateBar';
import { TaskListHeader } from '../TaskListHeader';
import { TaskList } from '../TaskList';

import styles from './styles.module.css';

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export function TaskListController () {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <main className={styles.container}>
      <TaskCreateBar />
      <TaskListHeader />
      <TaskList />
    </main>
  );
}
