import React from "react";
import styles from "../Styles/Card.module.css";
import { DataCard } from "../interfaces";

interface Props {
  data: DataCard;
}

export const Card = ({ data }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${data.id}`)
  };
  const handleDragEnd = () => {};

  return (
    <div
      className={styles.card}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{data.content}</p>
    </div>
  );
};
