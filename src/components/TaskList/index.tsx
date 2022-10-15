import { TaskListItem } from '../TaskListItem';
import { Task } from '../../@types/Task';
import styles from './styles.module.css';

interface TaskListProps {
  taskList: Task[];
  onDeleteTask: (id: string) => void;
  onChangeTaskCompleteStatus: (id: string, isCompleted: boolean) => void;
}

export function TaskList({ taskList, onDeleteTask, onChangeTaskCompleteStatus }: TaskListProps) {
  return (
    <ul className={styles.container}>
      {
        taskList.map(task =>
          <li className={styles.taskItem} key={task.id}>
            <TaskListItem
              task={task}
              onDeleteTask={onDeleteTask}
              onChangeTaskCompleteStatus={onChangeTaskCompleteStatus}
            />
          </li>
        )
      }
    </ul>
  );
}
