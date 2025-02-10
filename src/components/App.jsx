import React, { useState } from "react";
import List from "./List";
import Heading from "./Heading";
import Add from "./Add";

function App() {
  const [item, setItem] = useState(""); //item = input value irl
  const [list, setList] = useState([]);
  function handleTyping(event) {
    const { value } = event.target;
    setItem(value);
  }
  function handleAdd(event) {
    setList((prevList) => [...prevList, item]);
    setItem("");
  }
  return (
    <div className="container">
      <Heading title={"To-Do List"} />
      <Add handleAdd={handleAdd} item={item} handleTyping={handleTyping} />
      <List itemPassed={list} />
    </div>
  );
}

export default App;
