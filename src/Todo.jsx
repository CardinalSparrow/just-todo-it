import React from "react";
import "./Todo.css";
const Todo = () => {
  return (
    <div id="container">
      <h1 id="title">
        Just <span>to</span>do it <i className="fa-solid fa-check"></i>
      </h1>
      <div id="add-task-container">
        <h3 className="msg error">Error message</h3>
        <input id="input-task" type="text" />
        <button id="add-task">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div id="task-container">
        <div className="task">
          <button>
            <i className="fa-solid fa-check"></i>
          </button>
          <button className="deleteTask">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
