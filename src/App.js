import React from "react";

const todoList = [
  {
    id: 1,
    task: "Do the Laundry!",
    dueDate: new Date(),
    isCompleted: false,
    priority: 3,
  },
  {
    id: 2,
    task: "Do the Dishes!",
    dueDate: new Date(),
    isCompleted: false,
    priority: 2,
  },
  {
    id: 3,
    task: "Buy milk!",
    dueDate: new Date(),
    isCompleted: false,
    priority: 1,
  },
  {
    id: 4,
    task: "Drop garbage!",
    dueDate: new Date(),
    isCompleted: false,
    priority: 4,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Todo, believe or not</h1>
      {todoList.map((todoItem) => (
        <p>{todoItem.task}</p>
      ))}
    </div>
  );
}

export default App;
