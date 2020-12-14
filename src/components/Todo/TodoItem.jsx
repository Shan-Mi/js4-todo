import React from "react";

const TodoItem = ({ todoItem }) => {
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

  return (
    <p>
      {getEmoji(todoItem.priority)}
      {todoItem.task} <br />
      {todoItem.dueDate.toLocaleString()}
      {isLate(todoItem.dueDate) && <strong> Late</strong>}
    </p>
  );
};

export default TodoItem;
