import React from "react";
import { RxCross2 } from "react-icons/rx";

function AddedChip({item,removeChip}) {
  return (
    <div className="addedchip">
      <div style={{display:'flex', alignItems:"center"}}>
        <img
          src={item.imageUrl}
          alt="avatar"
          className="adeded-chip-image"
        />
        <div className="added-info">
          <div className="added-name">{item.name}</div>
        </div>
      </div>
      <div className="chip-remove">
        <RxCross2  onClick={()=>removeChip(item.id)}/>
      </div>
    </div>
  );
}

export default AddedChip;
