import React from "react";

const Add = ({handleAdd, handleTyping, item}) => {
  return (
    <div className="form">
      <input type="text" onChange={handleTyping} value={item}/>
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default Add;
