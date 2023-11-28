import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  const [error, setError] = useState("");
  const [allTasks, setAllTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const addTask = () => {
    if (task.trim() !== "") {
      const newTask = {
        text: task,
        completed: false,
        date: new Date().toLocaleDateString(),
        time: time,
      };
      setAllTasks([...allTasks, newTask]);
      setTask("");
      setError("");
      setTime("00:00");
    } else {
      setError("Please enter a task!");
    }
  };
  return (
    <div id="container">
      <h1 id="title">
        Just <span>to</span>do it <i className="fa-solid fa-check"></i>
      </h1>
      <div id="add-task-container">
        {error && <h3 className="msg error">{error}</h3>}
        <input
          id="input-task"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          type="text"
          value={task}
        />
        <button id="add-task" onClick={addTask}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div id="task-container">
        <div className="task">
          <button className="checkTask">
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
