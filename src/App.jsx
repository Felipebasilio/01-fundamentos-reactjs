import './global.css'
import { Header, Sidebar, Post } from './components'

import styles from './App.module.css'

function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
