import styles from "../Styles/Drags.module.css";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

export const Drags = () => {
  const generalElements: CollapseProps["items"] = [
    {
      key: "1",
      label: "Add General Element",
      children: (
        <div className={styles.generalElements}>
          <div className={styles.generalElement}>Element 1</div>
          <div className={styles.generalElement}>Element 2</div>
          <div className={styles.generalElement}>Element 3</div>
          <div className={styles.generalElement}>Element 4</div>
          <div className={styles.generalElement}>Element 5</div>
          <div className={styles.generalElement}>Element 6</div>
        </div>
      ),
    },
  ];
  const formField: CollapseProps["items"] = [
    {
      key: "2",
      label: "Add Form Field",
      children: (
        <div className={styles.generalElements}>
          <div className={styles.generalElement}>Element 1</div>
          <div className={styles.generalElement}>Element 2</div>
          <div className={styles.generalElement}>Element 3</div>
          <div className={styles.generalElement}>Element 4</div>
          <div className={styles.generalElement}>Element 5</div>
          <div className={styles.generalElement}>Element 6</div>
        </div>
      ),
    },
  ];
  const layoutFields: CollapseProps["items"] = [
    {
      key: "3",
      label: "Layout Elements",
      children: (
        <div className={styles.generalElements}>
          <div className={styles.generalElement}>Element 1</div>
          <div className={styles.generalElement}>Element 2</div>
          <div className={styles.generalElement}>Element 3</div>
          <div className={styles.generalElement}>Element 4</div>
          <div className={styles.generalElement}>Element 5</div>
          <div className={styles.generalElement}>Element 6</div>
        </div>
      ),
    },
  ];
  const themes: CollapseProps["items"] = [
    {
      key: "4",
      label: "Add Form Field",
      children: (
        <div className={styles.generalElements}>
          <div className={styles.generalElement}>Element 1</div>
          <div className={styles.generalElement}>Element 2</div>
          <div className={styles.generalElement}>Element 3</div>
          <div className={styles.generalElement}>Element 4</div>
          <div className={styles.generalElement}>Element 5</div>
          <div className={styles.generalElement}>Element 6</div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.containerGeneralElements}>
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={generalElements}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
      <Collapse
        defaultActiveKey={["2"]}
        ghost
        items={formField}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
      <Collapse
        ghost
        items={layoutFields}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
      <Collapse
        ghost
        items={themes}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
    </div>
  );
};
