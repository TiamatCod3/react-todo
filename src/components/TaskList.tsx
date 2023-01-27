import { useState } from 'react'
import {ClipboardText} from 'phosphor-react'
import { AddBar } from './AddBar'
import { Info } from './Info'
import { Task } from './Task'
import styles from './TaskList.module.css'

interface TaskProps{
    id: number,
   description: string,
   done: boolean
}

const tasksList = [
    {
        id:3,
        description: 'Modificar o serviço',
        done: false
    },
    {
        id:2,
        description: 'Limpar a pia',
        done: false
    },
    {
        id:1,
        description: 'Varrer a casa',
        done: false
    }
  ]

export function TaskList() {
    
    const [tasks, setTasks] = useState(tasksList)

    function addTask(newTaskDescription:string) {
        const newId = tasks.length > 0 ? tasks[0].id + 1 : 1
        const newTask = {
            id: newId,
            description: newTaskDescription,
            done: false
        }
        setTasks([...tasks, newTask])
    }

    function changeTaskState(id:number) {
        const tasksChanged = tasks.map(task=>{
            if (task.id===id){
                return {
                    id: task.id,
                    description: task.description,
                    done: !task.done
                }
            }else{
                return task
            }
        })
        setTasks(tasksChanged)
    }

    function deleteTask(id:number) {
        const tasksWithoutDeletedOne = tasks.filter(task=>task.id !== id)
        setTasks(tasksWithoutDeletedOne)
    }

    function handleTaks() {
        return (
            <div className={styles.tasks}>
                {tasks.sort((a,b)=>b.id-a.id).map(task=>{
                    return(
                        <Task 
                        key={task.id}
                        id={task.id}
                        description={task.description}
                        done={task.done}
                        onCheckClick={changeTaskState}
                        onDeleteTask={deleteTask}
                        />
                        )
                    })}
            </div>
        )
    }

    function handleEmptyTasks() {
        return (
            <div className={styles['without-tasks']}>
                <ClipboardText weight={'regular'} size={48}/>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        )
    }

    return(
        <div className={styles['task-list']}>
            <AddBar 
                onAddTask={addTask}
            />
            <Info 
                count={tasks.length}
                completed={tasks.filter(task=>task.done==true).length}            
            />
            {
                tasks.length > 0 ? handleTaks() : handleEmptyTasks()
            }
        </div>
    )
}