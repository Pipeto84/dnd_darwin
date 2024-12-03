import styles from "../Styles/Card.module.css";
import { DataCard } from '../interfaces'

interface Props {
  data: DataCard;
}

export const Card = ({data}: Props) => {
  const handleDragStart = () => {};
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
