import styles from './App.module.css';

import { Header } from './components/Header';
import { TaskCreateBar } from './components/TaskCreateBar';
import { TaskListHeader } from './components/TaskListHeader';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.wrapper}>
        <TaskCreateBar />

        <TaskListHeader />

        <TaskList />
      </main>
    </div>
  )
}

export default App
