import styles from './Header.module.css'
import todoLogo from '../assets/images/logo.png'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={todoLogo} alt="" />
            <h1>todo</h1>
        </div>
    )
}