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

  function createNewTask(description: string) {
    // simple way to generate an hexadecimal id
    const id = Math.floor(Math.random() * 10000).toString(16);
    const newTask: Task = {
      id,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <main className={styles.container}>
      <TaskCreateBar onCreateTask={createNewTask}/>
      <TaskListHeader />
      <TaskList />
    </main>
  );
}
