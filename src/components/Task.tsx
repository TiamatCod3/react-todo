import {Trash, Check} from 'phosphor-react'
import { AnchorHTMLAttributes, DetailedHTMLProps, LinkHTMLAttributes, MouseEventHandler } from 'react'
import styles from './Task.module.css'

interface TaskProps{
    id: number,
   description: string,
   done: boolean,
   onCheckClick: (id:number) => void,
   onDeleteTask: (id:number) => void
}

export function Task({id, description, done, onCheckClick, onDeleteTask}:TaskProps){

    function handleCheckClick() {
        onCheckClick(id)
    }

    function handleDeleteTask() {
        onDeleteTask(id)
    }
    
    return (
        <li className={styles.task}>
            <div className={styles.description}>
                <div
                    className={done ? styles.checked : styles.unchecked}
                    onClick={handleCheckClick}
                >
                    <Check />
                </div>
                <p>
                    {description}
                </p>
            </div>
            <div onClick={handleDeleteTask} className={styles.excluir}>
                <Trash size={16} />
            </div>
        </li>
    )
}