import styles from "./Styles/App.module.css";
import { Form } from "./components/Form";
import { Drags } from "./components/Drags";
import { cards } from "./Data/dataCards";

function App() {
  return (
    <div className={styles.containerMain}>
      <Drags cards={cards} />
      <Form />
    </div>
  );
}

export default App;
