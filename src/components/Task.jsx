import React, { useState } from "react";

export default function Task({ task }) {
  const [done, setDone] = useState(false);

  function toggleDone() {
    setDone((prev) => !prev);
  }

  return (
    <li>
      {task}
      <button className="task-btn" onClick={toggleDone}>
        {done ? "Done" : "Not Done"}
      </button>
    </li>
  );
}
