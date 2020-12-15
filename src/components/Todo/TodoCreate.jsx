import React, { useContext, useState, useEffect } from "react"
import TaskContext from "../../contexts/TaskContext"

const TodoCreate = () => {
  const { taskList, setTaskList } = useContext(TaskContext)
  const pad = (num) => (num > 9 ? num : `0${num}`)
  const now = new Date()
  const nowFullTimeString = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`
  const nowShortTimeString = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}`
  const nowTimeString = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
    now.getSeconds()
  )}`
  const [task, setTask] = useState("")
  const [dateInput, setDateInput] = useState(nowFullTimeString)
  const [calanderDate, setCalanderDate] = useState(nowShortTimeString)
  const [time, setTime] = useState(nowTimeString)
  const [priority, setPriority] = useState(1)

  const handleOnDateChange = (e) => {
    const value = e.target.value
    setDateInput(value)
    setCalanderDate(e.target.value)
  }

  const handleOnTimeChange = (e) => {
    e.preventDefault()
    setTime(e.target.value)
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    let [year, month, date, hour, minute, second] = dateInput.split("-")
    const timeArr = time.split(":")
    hour = timeArr[0]
    minute = timeArr[1]
    const dueDate = new Date(year, month - 1, date, hour, minute, second)
    setCalanderDate(`${year}-${month}-${date}`)
    const payload = {
      id: Date.now(),
      task,
      dueDate,
      isCompleted: false,
      priority,
    }
    setTaskList([...taskList, payload])
    setTask("")
    setPriority(1)
    setDateInput(nowFullTimeString)
    setCalanderDate(nowShortTimeString)
  }


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList))
  }, [taskList])

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="New Todo"
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
        type="time"
        placeholder="12:30"
        value={time}
        onChange={handleOnTimeChange}
      />
      <input
        type="text"
        placeholder="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button type="submit">Add tast</button>
    </form>
  )
}

export default TodoCreate
