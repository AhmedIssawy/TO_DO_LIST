import React from "react";
import Task from "./Task"; // Import the new Task component

export default function List({ itemPassed }) {
  return (
    <div>
      <ul>
        {itemPassed.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </ul>
    </div>
  );
}
