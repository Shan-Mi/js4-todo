import React, { useState, useEffect } from "react"
import TodoItem from "./components/Todo/TodoItem"
import TodoCreate from "./components/Todo/TodoCreate"
import TaskContext from "./contexts/TaskContext"
import styled from "styled-components"

const TitleWrapper = styled.h1`
  text-align: center;
`

function App() {
  const todoList = [
    {
      id: 1,
      task: "Do the laundry!",
      dueDate: new Date(2020, 11, 14, 10, 30),
      isCompleted: false,
      priority: 11,
    },
    {
      id: 2,
      task: "Do the dishes!",
      dueDate: new Date(2020, 11, 14, 11, 0),
      isCompleted: true,
      priority: 10,
    },
    {
      id: 3,
      task: "Make the bed",
      dueDate: new Date(2020, 11, 14, 6, 30),
      isCompleted: false,
      priority: 1,
    },
  ]

  // const [taskList, setTaskList] = useState(todoList)
  const intialState = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : todoList

  const [taskList, setTaskList] = useState(intialState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList))
  }, [taskList])

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      <div className="">
        <TitleWrapper>Todo, believe or not</TitleWrapper>
        <TodoCreate />
        <hr />
        {taskList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </div>
    </TaskContext.Provider>
  )
}

export default App
