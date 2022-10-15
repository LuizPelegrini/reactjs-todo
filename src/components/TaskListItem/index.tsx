import styles from './styles.module.css';
import { Trash } from 'phosphor-react';
import { Task } from '../../@types/Task';
import { ChangeEvent } from 'react';

interface TaskListItemProps {
  task: Task;
  onDeleteTask: (id: string) => void;
  onChangeTaskCompleteStatus: (id: string, isCompleted: boolean) => void;
}

export function TaskListItem ({ task, onDeleteTask, onChangeTaskCompleteStatus }: TaskListItemProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleChangeTaskCompleteStatus(event: ChangeEvent<HTMLInputElement>) {
    const isCompleted = event.target.checked;
    onChangeTaskCompleteStatus(task.id, isCompleted);
  }

  return (
    <div className={styles.container}>
      <input id={`task_${task.id}`} type="checkbox" onChange={handleChangeTaskCompleteStatus}/>
      <label htmlFor={`task_${task.id}`}>
        { task.description }
      </label>
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
