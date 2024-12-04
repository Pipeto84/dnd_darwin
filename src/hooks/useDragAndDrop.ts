import { useState } from "react";
import { DataCard, Status } from "../interfaces";

export const useDragAndDrop = (initialState: DataCard[][]) => {
  const [listItems, setListItems] = useState<DataCard[][]>(initialState);

  const handleUpdateList = (id: string, group: string) => {
    listItems.map((collapse) => {
      let card = collapse.find((item) => item.id === id);
      console.log(card?.group, id, group)

      if (card && card.status !== "form") {
        card.status = "form";
        setListItems((prev) =>
          prev.map((list) => 
            card!.group !== group ? 
            [card! , ...list.filter((item) => item.id !== id)] : [...list]
          )
        );
      }
    });
  };

  return {
    listItems,
    handleUpdateList,
  };
};
