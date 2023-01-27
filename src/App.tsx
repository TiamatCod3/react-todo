import { useState } from 'react'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'


import styles from './App.module.css'
import './global.css';

interface TaskProps{
  id: number,
 description: string,
 done: boolean
}

interface InfoProps{
  count: number,
  completed: number
}

interface Tasks{
  tasks: TaskProps[]
}



function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <TaskList  />
    </div>
  )
}

export default App
