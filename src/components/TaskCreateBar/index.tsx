import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

interface TaskCreateBarProps {
  onCreateTask: (description: string) => void;
}

export function TaskCreateBar({ onCreateTask }: TaskCreateBarProps) {
  const [description, setDescription] = useState('');

  function handleNewTaskText (event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    setDescription(target.value);

    // remove invalid field message, to prevent the situation where the user attempts to submit an empty description, but then types something and submit again
    target.setCustomValidity('');
  }

  function handleCreateNewTask (event: FormEvent) {
    // avoid form submit event to reload page
    event.preventDefault();

    if(description.trim() === ''){
      return;
    }

    // notify parent component to add description
    onCreateTask(description);

    // remove text from input upon submitting
    setDescription('');
  }

  function handleInvalidDescriptionText(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Please, provide a description');
  }

  return (
    <form className={styles.container} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        required
        onInvalid={handleInvalidDescriptionText}
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
