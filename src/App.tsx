import styles from "./Styles/App.module.css";
import { Form } from "./components/Form";
import { Drags } from "./components/Drags";
import { cards } from "./Data/dataCards";
import { useDragAndDrop } from './hooks/useDragAndDrop'

function App() {
  const {listItems, handleUpdateList} = useDragAndDrop(cards)

  return (
    <div className={styles.containerMain}>
      <Drags cards={listItems} />
      <Form items={listItems} handleUpdateList={handleUpdateList}/>
    </div>
  );
}

export default App;
