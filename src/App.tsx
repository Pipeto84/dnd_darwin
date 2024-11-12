import styles from "./App.module.css";
import type { CascaderProps } from "antd";
import { Cascader } from "antd";

interface Products {
  value: string;
  label: string;
}

const products: Products[] = [
  {
    value: "Product 1",
    label: "Product 1",
  },
  {
    value: "Product 2",
    label: "Product 2",
  },
  {
    value: "Product 3",
    label: "Product 3",
  },
];

function App() {
  const onChangeProducts: CascaderProps<Products>["onChange"] = (value) => {
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
            onChange={onChangeProducts}
          />
        </div>
        <hr className={styles.line} />
        <div className={styles.location}>
          <h3>Location of growing are</h3>
          <Cascader
            className={styles.locationsList}
            options={products}
            onChange={onChangeProducts}
          />
          <h3>Recipient Location Description*</h3>
          <Cascader
            className={styles.recipientLocations}
            options={products}
            onChange={onChangeProducts}
          />
        </div>
        <hr className={styles.line} />
      </div>
    </div>
  );
}

export default App;
