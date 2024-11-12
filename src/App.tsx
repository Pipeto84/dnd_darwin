import styles from "./App.module.css";
import type { CascaderProps } from "antd";
import { Cascader } from "antd";
import { Options, products, locations, options } from './Data/data'

function App() {
  const onChangeOptions: CascaderProps<Options>["onChange"] = (value) => {
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.titleHeader}>Harvesting Process</h1>
        <p className={styles.infoHeader}>
          En este formulario usted debe configurar los requerimientos básicos
          por el FDA para ser declarados por producto.
        </p>
      </header>
      <div className={styles.form}>
        <div className={styles.products}>
          <h3>Products</h3>
          <Cascader
            className={styles.productsList}
            options={products}
            onChange={onChangeOptions}
          />
        </div>
        <hr className={styles.line} />
        <div className={styles.location}>
          <h3>Location of growing are</h3>
          <Cascader
            className={styles.locationsList}
            options={locations}
            onChange={onChangeOptions}
          />
          <h3>Recipient Location Description*</h3>
          <Cascader
            className={styles.recipientLocations}
            options={options}
            onChange={onChangeOptions}
          />
        </div>
        <hr className={styles.line} />
      </div>
    </div>
  );
}

export default App;
