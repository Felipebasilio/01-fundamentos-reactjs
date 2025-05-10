import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://github.com/Felipebasilio.png" />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Felipe Basilio</strong>
                  <time title="10 de maio às 10:00" dateTime="2024-05-10 10:00:00">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar comentário">
                  <Trash size={24} />
                </button>
              </header>

              <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
              <button type="button">
                <ThumbsUp />
                Aplaudir <span>20</span>
              </button>
            </footer>
          </div>
        </div>
    )
}