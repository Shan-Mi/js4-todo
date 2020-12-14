import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../contexts/TaskContext";

const TodoCreate = () => {
  const { taskList, setTaskList } = useContext(TaskContext);
  const now = new Date();
  const nowFullTimeString = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
  const nowShortTimeString = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}`;
  const [task, setTask] = useState("");
  const [dateInput, setDateInput] = useState(nowFullTimeString);
  const [priority, setPriority] = useState(1);
  const [calanderDate, setCalanderDate] = useState(nowShortTimeString);
  const handleOnDateChange = (e) => {
    const value = e.target.value;
    setDateInput(value);
    setCalanderDate(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const [
      year,
      month,
      date,
      hour = 0,
      minute = 0,
      second = 0,
    ] = dateInput.split("-");
    const dueDate = new Date(year, month - 1, date, hour, minute, second);
    setCalanderDate(`${year}-${month}-${date}`);
    const payload = {
      id: Date.now(),
      task,
      dueDate,
      isCompleted: false,
      priority,
    };
    setTaskList([...taskList, payload]);
    setTask("");
    setPriority(1);
    setDateInput(nowFullTimeString);
    setCalanderDate(nowShortTimeString);
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
        value={calanderDate}
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
