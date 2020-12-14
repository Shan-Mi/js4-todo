import React, { useContext } from "react";
import TodoItem from "./components/Todo/TodoItem";
import TodoCreate from "./components/TodoCreate/TodoCreate";
import { TaskContext } from "./contexts/TaskContext";

function App() {
  const { taskList } = useContext(TaskContext);

  return (
    <div className="App">
      <h1>Todo, believe or not</h1>
      <TodoCreate />
      <hr />
      {taskList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
}

export default App;

/* 
  ✅ Lägg till  Time när man skapar en task
  Lägg till Prio när man skapar en task
  ✅ Ta bort task!
*/
