import React from "react";

function ChipText({ item ,addedChip}) {
  return (
    <div onClick={()=>addedChip(item)} className="chip">
      <img src={item.imageUrl} alt="avatar" className="chip-image" />
      <div className="chip-info">
        <div className="chip-name">{item.name}</div>
        <div className="chip-email">{item.email}</div>
      </div>
    </div>
  );
}

export default ChipText;
