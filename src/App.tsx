import styles from './Styles/App.module.css'
import { Form } from './components/Form'
import { Drags } from './components/Drags'

function App() {
  return (
    <div className={styles.containerMain}>
      <Drags />
      <Form />
    </div>
  )
}

export default App