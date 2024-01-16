import React from "react";
import sampleData from "./SampleData";
import ChipText from "./ChipText";

function ItemList({sampleData,addedChip}) {

  return (
    <div className="chip-input-container">
      {sampleData.map((item) => (
        <ChipText key={item.email} item={item} addedChip={addedChip} />
      ))}
    </div>
  );
}

export default ItemList;
