import React from "react";
import styles from "../Styles/Card.module.css";
import { DataCard } from "../interfaces";

interface Props {
  data: DataCard;
  handleDragging: (dragging: boolean) => void;
}

export const Card = ({ data, handleDragging }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('id', `${data.id}`)
    e.dataTransfer.setData('group', `${data.group}`)
    handleDragging(true)
  };
  const handleDragEnd = () => {
    handleDragging(false);
  }

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
