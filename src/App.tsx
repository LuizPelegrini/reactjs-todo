import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { TaskListHeader } from './components/TaskListHeader';

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.wrapper}>
        <form className={styles.addTaskForm}>
          <input type="text" className={styles.taskInput} placeholder="Add new task"/>
          <button type="submit">
            Create
            <PlusCircle size={18}/>
          </button>
        </form>

        <TaskListHeader />
      </main>
    </div>
  )
}

export default App
