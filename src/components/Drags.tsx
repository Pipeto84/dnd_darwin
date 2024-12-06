import styles from "../Styles/Drags.module.css";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { DataCard } from "../interfaces";
import { Card } from "./Card";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { cards } from "../Data/dataCards";

interface Props {
  cards: DataCard[][];
}

export const Drags = ({ cards }: Props) => {
  const { handleDragging } = useDragAndDrop(cards);

  const containerGeneralElements: CollapseProps["items"] = [
    {
      key: "1",
      label: <h3>Add General Element</h3>,
      children: (
        <>
          <p>Info general elements</p>
          <div className={styles.generalElements}>
            {cards[0].map((item) => (
              <Card data={item} key={item.id} handleDragging={handleDragging} />
            ))}
          </div>
        </>
      ),
    },
  ];
  const containerformField: CollapseProps["items"] = [
    {
      key: "2",
      label: <h3>Add Form Field</h3>,
      children: (
        <>
          <p>Info form field</p>
          <div className={styles.generalElements}>
            {cards[1].map((item) => (
              <Card data={item} key={item.id} handleDragging={handleDragging} />
            ))}
          </div>
        </>
      ),
    },
  ];
  const containerlayoutFields: CollapseProps["items"] = [
    {
      key: "3",
      label: <h3>Layout Elements</h3>,
      children: (
        <>
          <p>Info layout elements</p>
          <div className={styles.generalElements}>
            {cards[2].map((item) => (
              <Card data={item} key={item.id} handleDragging={handleDragging} />
            ))}
          </div>
        </>
      ),
    },
  ];
  const containerthemes: CollapseProps["items"] = [
    {
      key: "4",
      label: <h3>Themes</h3>,
      children: (
        <>
          <p>Info themes</p>
          <div className={styles.generalElements}>
            {cards[3].map((item) => (
              <Card data={item} key={item.id} handleDragging={handleDragging} />
            ))}
          </div>
        </>
      ),
    },
  ];
  const onChangeA = (value: string) => {
    console.log("A: ", value);
  };

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
