import React from "react";
import "./Todo.css";
const Todo = () => {
  return (
    <div id="container">
      <div id="add-task-container">
        <h3 className="msg error">Error message</h3>
        <input id="input-task" type="text" />
        <button id="add-task"></button>
      </div>
      <div id="task-container">
        <div className="task">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
