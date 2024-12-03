import styles from "../Styles/Drags.module.css";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { DataCard } from "../interfaces";
import { Card } from "./Card";

interface Props {
  cards: DataCard[][];
}

export const Drags = ({ cards }: Props) => {
  const containerGeneralElements: CollapseProps["items"] = [
    {
      key: "1",
      label: "Add General Element",
      children: (
        <div className={styles.generalElements}>
          {cards[0].map((item) => (
            <Card data={item} key={item.id} />
          ))}
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
          {cards[1].map((item) => (
            <Card data={item} key={item.id} />
          ))}
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
          {cards[2].map((item) => (
            <Card data={item} key={item.id} />
          ))}
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
          {cards[3].map((item) => (
            <Card data={item} key={item.id} />
          ))}
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
          <CaretRightOutlined rotate={isActive ? 270 : 90} />
        )}
      />
      <Collapse
        defaultActiveKey={["2"]}
        ghost
        items={containerformField}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 270 : 90} />
        )}
      />
      <Collapse
        ghost
        items={containerlayoutFields}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 270 : 90} />
        )}
      />
      <Collapse
        ghost
        items={containerthemes}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 270 : 90} />
        )}
      />
    </div>
  );
};
