import styles from "../Styles/Form.module.css";
import type {
  InputNumberProps,
  DatePickerProps,
  TimePickerProps,
} from "antd";
import { InputNumber, Select, DatePicker, TimePicker } from "antd";
import { products, locations, options, measures } from "../Data/data";

export function Form() {
  const onChangeProduct = (value: string) => {
    console.log("Product: ", value);
  };
  const onChangeLocation = (value: string) => {
    console.log("Location: ", value);
  };
  const onChangeRecipient = (value: string) => {
    console.log("Recipient: ", value);
  };
  const onChangeAmount: InputNumberProps["onChange"] = (value) => {
    console.log("Amount: ", value);
  };
  const onChangeMeasure = (value: string) => {
    console.log("Measure: ", value);
  };
  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(dateString);
  };
  const onChangeTime: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(timeString);
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
          <h4>Products</h4>
          <Select
            className={styles.productsList}
            options={products}
            onChange={onChangeProduct}
          />
        </div>
        <hr className={styles.line} />
        <div className={styles.location}>
          <h4>Location of growing are</h4>
          <Select
            className={styles.locationsList}
            options={locations}
            onChange={onChangeLocation}
          />
          <h4>Recipient Location Description*</h4>
          <Select
            className={styles.recipientLocations}
            options={options}
            onChange={onChangeRecipient}
          />
        </div>
        <hr className={styles.line} />
        <div className={styles.selections}>
          <h4>Product Selection</h4>
          <div className={styles.amountType}>
            <InputNumber
              className={styles.amount}
              min={0}
              defaultValue={0}
              onChange={onChangeAmount}
              changeOnWheel
            />
            <Select
              className={styles.measure}
              defaultValue={measures[1].label}
              onChange={onChangeMeasure}
              options={measures}
            />
          </div>
          <div className={styles.dateTime}>
            <div className={styles.date}>
              <h4>Date of Harversting</h4>
              <DatePicker
                className={styles.dateSelect}
                onChange={onChangeDate}
              />
            </div>
            <div className={styles.time}>
              <h4>Time of Harversting</h4>
              <TimePicker
                className={styles.dateSelect}
                onChange={onChangeTime}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
