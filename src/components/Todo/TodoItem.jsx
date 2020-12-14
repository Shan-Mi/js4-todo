import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TaskContext } from "../../contexts/TaskContext";

const Button = styled.button`
  background-color: yellowgreen;
  padding: 10px;
  border: none;
  display: inline-block;
  width: 40vw;
  max-width: 300px;
  font-weight: bold;
`;

const TodoItemWrapper = styled.div`
  padding: 1rem 3rem;
`;

const TodoItem = ({
  todoItem: { id, priority, dueDate, task, isCompleted: initCompleteStatus },
}) => {
  const { taskList, setTaskList } = useContext(TaskContext);
  const [isCompleted, setIsCompleted] = useState(initCompleteStatus);

  const handleToggleIsComplete = () => setIsCompleted(!isCompleted);

  const getEmoji = (priority) => {
    if (priority > 10) {
      return "⭐️";
    }
    if (priority > 5 && priority <= 10) {
      return "🔔";
    }
    return "🎃";
  };

  const isLate = (dueDate) => dueDate < new Date();

  const getLateEmoji = (dueDate) => (isLate(dueDate) ? "🙀" : null);

  const handleDelete = () => {
    const filteredTodos = taskList.filter((todo) => todo.id !== id);
    setTaskList(filteredTodos);
  };

  return (
    <TodoItemWrapper>
      <h3>
        {getEmoji(priority)}
        {task}
      </h3>
      <p>
        {getLateEmoji(dueDate)}
        {dueDate.toLocaleString()}
      </p>
      <Button onClick={handleToggleIsComplete}>
        {isCompleted ? "Done" : "To be done"}
      </Button>
      <button onClick={handleDelete}>Delete</button>
    </TodoItemWrapper>
  );
};

export default TodoItem;
