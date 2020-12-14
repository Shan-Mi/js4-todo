import React from "react";
import TodoItem from "./components/Todo/TodoItem";
const todoList = [
  {
    id: 1,
    task: "Do the Laundry!",
    dueDate: new Date(2020, 10, 14, 10, 30, 10),
    isCompleted: false,
    priority: 11,
  },
  {
    id: 2,
    task: "Do the Dishes!",
    dueDate: new Date(2020, 11, 14, 11, 0, 29),
    isCompleted: false,
    priority: 2,
  },
  {
    id: 3,
    task: "Buy milk!",
    dueDate: new Date(2020, 11, 14, 7, 33, 20),
    isCompleted: false,
    priority: 1,
  },
  {
    id: 4,
    task: "Drop garbage!",
    dueDate: new Date(2020, 11, 14, 8, 24, 36),
    isCompleted: false,
    priority: 6,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Todo, believe or not</h1>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
}

export default App;
