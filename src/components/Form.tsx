import styles from "../Styles/Form.module.css";
import type { InputNumberProps, DatePickerProps, TimePickerProps } from "antd";
import { InputNumber, Select, DatePicker, TimePicker } from "antd";
import { products, locations, optionsForm, measures } from "../Data/dataForm";
import React from "react";
import { DataCard, Status } from '../interfaces'
import { Card } from './Card'

interface Props {
  items: DataCard[][]
  handleUpdateList: (id: string, status:Status) => void
}

export function Form({items= [[]], handleUpdateList}: Props) {
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
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(e.dataTransfer.getData('text'), 'form')
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
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
          <span className={styles.infoProducts}>Commodity</span>
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
            options={optionsForm}
            onChange={onChangeRecipient}
          />
          <span className={styles.infoProducts}>
            Harvest Location Address
            <br />
            <br />
            Recipient Organization
          </span>
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
        <hr className={styles.line} />
        <div
          className={styles.dropSpace}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >{
          items.map(list => (
            list.map(item => (
              item.status === 'form' &&
              <Card
                data={item}
                key={item.id}
              />
            ))
          ))
        }</div>
      </div>
    </div>
  );
}
