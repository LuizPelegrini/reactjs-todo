import { useState } from 'react';

import { TaskCreateBar } from '../TaskCreateBar';
import { TaskListHeader } from '../TaskListHeader';
import { TaskList } from '../TaskList';
import { Task } from '../../@types/Task';

import styles from './styles.module.css';

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
      <TaskListHeader taskList={tasks}/>
      <TaskList />
    </main>
  );
}
