import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const GlobalContext = ({ children }) => {
  // const todoList = [
  //   {
  //     id: 1,
  //     task: "Do the Laundry!",
  //     dueDate: new Date(2020, 10, 14, 10, 30, 10),
  //     isCompleted: false,
  //     priority: 11,
  //   },
  //   {
  //     id: 2,
  //     task: "Do the Dishes!",
  //     dueDate: new Date(2020, 11, 14, 11, 0, 29),
  //     isCompleted: false,
  //     priority: 2,
  //   },
  //   {
  //     id: 3,
  //     task: "Buy milk!",
  //     dueDate: new Date(2020, 11, 14, 7, 33, 20),
  //     isCompleted: false,
  //     priority: 1,
  //   },
  //   {
  //     id: 4,
  //     task: "Drop garbage!",
  //     dueDate: new Date(2020, 11, 14, 8, 24, 36),
  //     isCompleted: false,
  //     priority: 6,
  //   },
  // ];

  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("todos"))
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <TaskContext.Provider
      value={{
        taskList,
        setTaskList,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default GlobalContext;
