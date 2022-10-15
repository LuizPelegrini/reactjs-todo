import { Header } from './components/Header';
import { TaskListController } from './components/TaskListController';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <TaskListController />
    </div>
  )
}

export default App
