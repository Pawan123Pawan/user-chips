import React, { useState } from "react";
import AddedChip from "./AddedChip";
import ItemList from "./ItemList";
import sampleData from "./SampleData";

function ChipsInput() {
  const [addedChips, setAddedChips] = useState([]);
  const [filterChips, setFilterChips] = useState([]);
  const [input, setInput] = useState("");
  const [showChips, setShowChips] = useState(false);
  const [filterData, setFilterData] = useState([...sampleData]);

  function handleInputField(e) {
    setInput(e.target.value);
    const filteredData = sampleData.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setFilterData(filteredData);
  }

  function handleClickInput() {
    setShowChips(true);
  }

  function addedChip(chip) {
    setAddedChips([...addedChips, chip]);
    setShowChips(false);
    setFilterChips([...addedChips, chip]);
  }

  function removeChip(id) {
    const filteredChips = addedChips.filter((chip) => chip.id !== id);
    setFilterChips([...filteredChips]);
    setAddedChips([...filteredChips]);
  }

  return (
    <div>
      <div className="pickUsers">Pick Users</div>
      <div className="chip-add-here">
        <div className="addedchip-input">
          {filterChips.map((item ) => (
            <AddedChip key={item.id} item={item} removeChip={removeChip} />
          ))}
        </div>
        <div className="handle_input_div">
          <input
            value={input}
            onClick={handleClickInput}
            onChange={(e) => handleInputField(e)}
            className="custom-input"
            type="text"
            placeholder="add chips..."
          />
          {showChips && (
            <ItemList sampleData={filterData} addedChip={addedChip} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChipsInput;
