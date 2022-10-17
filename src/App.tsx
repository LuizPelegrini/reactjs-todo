import { Header } from './components/Header';
import { TaskListController } from './components/TaskListController';
import { Footer } from './components/Footer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.tasks}>
        <TaskListController />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default App
