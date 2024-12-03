import styles from "../Styles/Drags.module.css";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { DataCard } from '../interfaces'
import { Card } from './Card'

interface Props {
  generalElements: DataCard[]
  formFields: DataCard[]
  layoutsElements: DataCard[]
  themes: DataCard[]
}

export const Drags = ({generalElements, formFields, layoutsElements, themes}: Props) => {
  const containerGeneralElements: CollapseProps["items"] = [
    {
      key: "1",
      label: "Add General Element",
      children: (
        <div className={styles.generalElements}>
          {
            generalElements.map(item => (
              <Card
                data={item}
              />
            ))
          }
        </div>
      ),
    },
  ];
  const containerformField: CollapseProps["items"] = [
    {
      key: "2",
      label: "Add Form Field",
      children: (
        <div className={styles.generalElements}>
          {
            formFields.map(item => (
              <Card
                data={item}
              />
            ))
          }
        </div>
      ),
    },
  ];
  const containerlayoutFields: CollapseProps["items"] = [
    {
      key: "3",
      label: "Layout Elements",
      children: (
        <div className={styles.generalElements}>
          {
            layoutsElements.map(item => (
              <Card
                data={item}
              />
            ))
          }
        </div>
      ),
    },
  ];
  const containerthemes: CollapseProps["items"] = [
    {
      key: "4",
      label: "Add Form Field",
      children: (
        <div className={styles.generalElements}>
          {
            themes.map(item => (
              <Card
                data={item}
              />
            ))
          }
        </div>
      ),
    },
  ];

  return (
    <div className={styles.containerGeneralElements}>
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={containerGeneralElements}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
      <Collapse
        defaultActiveKey={["2"]}
        ghost
        items={containerformField}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
      <Collapse
        ghost
        items={containerlayoutFields}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
      <Collapse
        ghost
        items={containerthemes}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
    </div>
  );
};
