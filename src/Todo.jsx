import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  const [completedTasks, setCompletedTasks] = useState(0);
  console.log(completedTasks);
  const [error, setError] = useState("");

  // Return an empty array if there are no tasks previously set or retrieve an array of all tasks stored in local storage on component mount
  const [allTasks, setAllTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  //update local storage on tasks change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(allTasks));
    // Update completed tasks count when allTasks changes
    setCompletedTasks(allTasks.filter((task) => task.completed).length);
  }, [allTasks]);
  console.log(allTasks.filter((task) => task.completed).length, [allTasks]);

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

  // Toggles the completion status of a task. The function is invoked when check/recycle button is clicked.
  const toggleTask = (index) => {
    const updatedTasks = [...allTasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setAllTasks(updatedTasks);
    console.log(updatedTasks[index].completed);
    // Update completed tasks count based on the toggled task
    setCompletedTasks(updatedTasks.filter((task) => task.completed).length);
  };
  const deleteTask = (index) => {
    const updatedTasks = [...allTasks];
    updatedTasks.splice(index, 1);
    setAllTasks(updatedTasks);
    console.log(updatedTasks.length);
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const formattedTime = `${formattedHour}:${formattedMinute}`;
        times.push(
          <option key={formattedTime} value={formattedTime}>
            {formattedTime}
          </option>
        );
      }
    }
    return times;
  };

  return (
    <div id="container">
      <h1 id="title">
        Just <span>to</span>do it <i className="fa-solid fa-check"></i>
      </h1>
      <h2 id="task-counter">
        Total Tasks: {allTasks.length === 0 ? "No task set" : allTasks.length}
      </h2>
      <h2 id="completed-tasks">
        Completed Tasks:
        {` ${completedTasks} of 
        ${allTasks.length}`}
      </h2>

      <div id="add-task-container">
        {error && <h3 className="msg error">{error}</h3>}

        <input
          id="input-task"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          type="text"
          value={task}
        />
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {generateTimeOptions()}
        </select>
        <button id="add-task" onClick={addTask}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div id="task-container">
        {allTasks.map((task, index) => (
          <div className="task" key={index}>
            <div className="date-and-time">
              <p>{task.date}</p>
              <p>{task.time}</p>
            </div>
            <li
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "green" : "black",
              }}
            >
              {task.text}
            </li>

            <button
              onClick={() => toggleTask(index)}
              className={task.completed ? "recycleTask" : "checkTask"}
            >
              {task.completed ? (
                <i className="fa-solid fa-recycle"></i>
              ) : (
                <i className="fa-solid fa-check"></i>
              )}
            </button>
            <button className="deleteTask" onClick={() => deleteTask(index)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
      </div>
      <h3 id="congratulations">
        {allTasks.length !== 0
          ? completedTasks === allTasks.length
            ? "Congratulatons, you've completed all set tasks!!!"
            : completedTasks === 0 && "No tasks completed yet!!!"
          : ""}
      </h3>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Todo />
    </div>
  );
};

export default App;
