import { useState } from "react";
import { DataCard } from "../interfaces";

export const useDragAndDrop = (initialState: DataCard[][]) => {

  const [listItems, setListItems] = useState(initialState);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: string) => {
    listItems.map((collapse) => {
      let card = collapse.find((item) => item.id === id);

      if (card && card.status !== "form") {
        card.status = "form";
        setListItems((prev) => prev.map((list) => [...list]));
      }
    });
  };

  return {
    listItems,
    handleUpdateList,
    isDragging,
    handleDragging
  };
};
