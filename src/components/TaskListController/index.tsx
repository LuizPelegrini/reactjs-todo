import { useState } from 'react';

import { TaskCreateBar } from '../TaskCreateBar';
import { TaskListHeader } from '../TaskListHeader';
import { TaskList } from '../TaskList';
import { NoTaskItems } from '../NoTaskItems';
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

  function changeTaskCompleteStatus(id: string, isCompleted: boolean) {
    const taskList = tasks.map(task => {
      if(task.id === id){
        task.completed = isCompleted;
      }

      return task;
    });

    setTasks(taskList);
  }

  function deleteTask (id: string) {
    const taskListWithoutDeletedTask = tasks.filter(task => task.id !== id);
    setTasks(taskListWithoutDeletedTask);
  }

  return (
    <main className="global__wrapper">
      <TaskCreateBar onCreateTask={createNewTask}/>
      <TaskListHeader taskList={tasks}/>
      {
        tasks.length > 0 ?
          <TaskList
            taskList={tasks}
            onDeleteTask={deleteTask}
            onChangeTaskCompleteStatus={changeTaskCompleteStatus}
          /> :
          <NoTaskItems />
      }
    </main>
  );
}
