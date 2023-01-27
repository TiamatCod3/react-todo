import styles from './Info.module.css'

interface InfoProps{
    count: number,
    completed: number
}

export function Info({count, completed}:InfoProps){
    return(
        <div className={styles.info}>
            <div className={styles.created}>
                Tarefas criadas
                <div>{count}</div>
            </div>
            <div className={styles.completed}>
                Concluídas
                <div>{completed} de {count}</div>
            </div>
        </div>
    )
}