import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../contexts/TaskContext";

const TodoCreate = () => {
  const { taskList, setTaskList } = useContext(TaskContext);

  const now = new Date();
  const nowString = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
  const [task, setTask] = useState("");
  const [dateInput, setDateInput] = useState(nowString);
  const [priority, setPriority] = useState(1);

  const handleOnDateChange = (e) => {
    const value = e.target.value;
    setDateInput(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const [year, month, date, hour, minute, second] = dateInput.split("-");
    const dueDate = new Date(year, month - 1, date, hour, minute, second);
    const payload = {
      id: Date.now(),
      task,
      dueDate,
      isCompleted: false,
      priority,
    };
    console.log(payload);
    setTaskList([...taskList, payload]);
    setTask("");
    setPriority(1);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="new todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        placeholder="2020-12-01"
        value={dateInput}
        onChange={handleOnDateChange}
      />
      <input
        type="text"
        placeholder="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button type="submit">Add tast</button>
    </form>
  );
};

export default TodoCreate;
