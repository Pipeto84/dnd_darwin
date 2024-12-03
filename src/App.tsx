import styles from "./Styles/App.module.css";
import { Form } from "./components/Form";
import { Drags } from "./components/Drags";
import {
  generalElements,
  formFields,
  layoutsElements,
  themes,
} from "./Data/dataCards";

function App() {
  return (
    <div className={styles.containerMain}>
      <Drags
        generalElements={generalElements}
        formFields={formFields}
        layoutsElements={layoutsElements}
        themes={themes}
      />
      <Form />
    </div>
  );
}

export default App;
