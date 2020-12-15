import React, { useState, useContext } from "react"
import styled from "styled-components"
import TaskContext from "../../contexts/TaskContext"

const Button = styled.button`
  background-color: yellowgreen;
  padding: 10px;
  border: none;
  display: inline-block;
  width: 40vw;
  max-width: 300px;
  font-weight: bold;

  &.delete {
    background-color: red;
    width: 80px;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: darkred;
      transition: all 0.3s ease-in-out;
    }
  }
`
const TodoTextWrapper = styled.h3`
  &.done {
    text-decoration: line-through;
    font-style: italic;
    color: darkgrey;
  }
`

const TodoItemWrapper = styled.div`
  padding: 1rem 3rem;
`

const TodoItem = ({
  todoItem: { id, priority, dueDate, task, isCompleted: initCompleteStatus },
}) => {
  const { taskList, setTaskList } = useContext(TaskContext)

  const [isCompleted, setIsCompleted] = useState(initCompleteStatus)

  const handleToggleIsComplete = (e) => {
    setIsCompleted(!isCompleted)
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !isCompleted }
      }
      return task
    })
    localStorage.setItem("todos", JSON.stringify(newTaskList))
  }

  const getEmoji = (priority) => {
    if (priority >= 50) {
      return "💖"
    }
    if (priority > 10) {
      return "⭐️"
    }
    if (priority > 5 && priority <= 10) {
      return "🔔"
    }
    return "🎃"
  }

  const isLate = (dueDate) => dueDate < new Date()

  const getLateEmoji = (dueDate) => (isLate(dueDate) ? "🙀" : null)

  const handleDelete = () => {
    const filteredTodos = taskList.filter((todo) => todo.id !== id)
    setTaskList(filteredTodos)
  }

  return (
    <TodoItemWrapper>
      <TodoTextWrapper className={isCompleted ? "done" : ""}>
        {getEmoji(priority)}
        {task}
      </TodoTextWrapper>
      <p>
        {getLateEmoji(dueDate)}
        {dueDate.toLocaleString()}
      </p>
      <Button onClick={handleToggleIsComplete}>
        {isCompleted ? "Done" : "To be done"}
      </Button>
      <Button className="delete" onClick={handleDelete}>
        Delete
      </Button>
    </TodoItemWrapper>
  )
}

export default TodoItem
