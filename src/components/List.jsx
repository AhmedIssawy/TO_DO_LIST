import React, { useState } from "react";

export default function List({ itemPassed }) {
  const [taskDone, setItemDone] = useState(false);
  function done() {
    setItemDone((prev) => !prev);
  }
  return (
    <div>
      <ul>
        {itemPassed.map((task, i) => (
          <li key={i}>
            {task}{" "}
            <button onClick={done}>{taskDone ? "Done" : "Not Done"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
