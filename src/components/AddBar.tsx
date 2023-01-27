import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AddBar.module.css'

interface AddTaskProps{
    onAddTask: (task:string) => void
}

export function AddBar({onAddTask}:AddTaskProps){
    const [newTaskDescription, setNewTaskDescription] = useState('')

    function handleNewTaskDescriptionChange(event:ChangeEvent<HTMLInputElement>) {
        setNewTaskDescription(event.target.value)
    }

    function handleAddTask(event:FormEvent) {
        event.preventDefault()
        onAddTask(newTaskDescription)
        setNewTaskDescription('')
    }

    return(
        <form 
            onSubmit={handleAddTask}
            className={styles['add-bar']} 
            action=""

        >
            <input 
                type="text" 
                name="" 
                id="" 
                value = {newTaskDescription}
                onChange={handleNewTaskDescriptionChange}
                placeholder={"Adicione uma nova tarefa"}
            />
            <input type="submit" value={"Criar"} />
            
        </form>
    )
}