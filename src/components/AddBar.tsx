import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './AddBar.module.css'

interface AddTaskProps{
    onAddTask: (task:string) => void
}

export function AddBar({onAddTask}:AddTaskProps){
    const [newTaskDescription, setNewTaskDescription] = useState('')

    function handleNewTaskDescriptionChange(event:ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskDescription(event.target.value)
    }

    function handleAddTask(event:FormEvent) {
        event.preventDefault()
        onAddTask(newTaskDescription)
        setNewTaskDescription('')
    }

    function handleNewTaskDescriptionInvalid(event:InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewTaskEmpty = newTaskDescription.length === 0;

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
                required
                onInvalid={handleNewTaskDescriptionInvalid}
            />
            <input 
                type="submit" 
                value={"Criar"} 
                disabled={isNewTaskEmpty}
            />
            
        </form>
    )
}