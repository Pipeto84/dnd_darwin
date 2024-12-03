import { useState } from "react";
import { DataCard, Status } from "../interfaces";

export const useDragAndDrop = (initialState: DataCard[][]) => {
  const [listItems, setListItems] = useState<DataCard[][]>(initialState);

  const handleUpdateList = (id: string, status: Status) => {
    listItems.map((collapse) => {
      let card = collapse.find((item) => item.id === id);

      if (card && card.status !== "form") {
        card.status = "form";
        setListItems((prev) =>
          prev.map((list) => [card!, ...list.filter((item) => item.id !== id)])
        );
      }
    });
  };

  return {
    listItems,
    handleUpdateList,
  };
};
