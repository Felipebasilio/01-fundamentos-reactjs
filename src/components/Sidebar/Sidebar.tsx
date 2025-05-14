import { Avatar } from '../Avatar/Avatar'
import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/vector-1741064312094-57fee11c434e?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/Felipebasilio.png" />
                <strong>Felipe Basilio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
              <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
              </a>
            </footer>
        </aside>
    )
}