import styles from "./Styles/App.module.css";
import { Form } from "./components/Form";
import { Drags } from "./components/Drags";
import { cards } from "./Data/dataCards";
import { useDragAndDrop } from './hooks/useDragAndDrop'

function App() {
  const {listItems, handleUpdateList, isDragging, handleDragging} = useDragAndDrop(cards)

  return (
    <div className={styles.containerMain}>
      <Drags cards={listItems} />
      <Form list={listItems} handleUpdateList={handleUpdateList} isDragging={isDragging} handleDragging={handleDragging}/>
    </div>
  );
}

export default App;
