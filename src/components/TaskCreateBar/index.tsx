import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

interface TaskCreateBarProps {
  onCreateTask: (description: string) => void;
}

export function TaskCreateBar({ onCreateTask }: TaskCreateBarProps) {
  const [description, setDescription] = useState('');

  function handleNewTaskText (event: ChangeEvent<HTMLInputElement>) {
    const text = event.target.value;
    setDescription(text);
  }

  function handleCreateNewTask (event: FormEvent) {
    // avoid form submit event to reload page
    event.preventDefault();

    // notify parent component to add description
    onCreateTask(description);
  }

  return (
    <form className={styles.container} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        className={styles.taskInput}
        placeholder="Add new task"
        onChange={handleNewTaskText}
        value={description}
      />
      <button type="submit">
        Create
        <PlusCircle size={18}/>
      </button>
    </form>
  );
}
