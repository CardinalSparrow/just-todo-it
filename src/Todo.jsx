import React from "react";

const Todo = () => {
  return (
    <div id="container">
      <div id="add-task-container">
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
