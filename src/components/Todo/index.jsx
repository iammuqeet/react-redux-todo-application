import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [myTodo, setMyTodo] = useState("");

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={myTodo}
        type="text"
        placeholder="Add your todo here"
        onChange={(e) => setMyTodo(e.target.value)}
      />
      <button onClick>Add Todo</button>
    </div>
  );
};

export default Todo;
