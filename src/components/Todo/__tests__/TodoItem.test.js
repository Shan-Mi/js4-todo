import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import TaskContext from "../../../contexts/TaskContext"

import TodoItem from "../TodoItem"

let container = null

let taskList = [
  {
    id: 1,
    task: "Do the laundry!",
    dueDate: new Date(2020, 11, 14, 10, 30),
    isCompleted: false,
    priority: 11,
  },
]

const setTaskList = jest.fn()

const renderContainer = (taskList, setTaskList) => (
  <TaskContext.Provider value={{ taskList, setTaskList }}>
    <TodoItem todoItem={taskList[0]} />
  </TaskContext.Provider>
)

beforeEach(() => {
  container = document.createElement("div")
  document.body.append(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()

  container = null
})
describe("Tests task Item", () => {
  const payload = {
    id: 1,
    task: "this is a new task",
    dueDate: "2017-10-23",
    isCompleted: false,
    priority: 1,
  }

  const today = new Date()
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  )
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  )

  it("with ReactDom", () => {
    act(() => {
      render(renderContainer(taskList, setTaskList), container)
    })
  })

  it("render priority >= 50 correctly", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, priority: 53 }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).toContain("💖")
  })

  it("render 50 > priority > 10 correctly", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, priority: 35 }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).toContain("⭐️")
  })

  it("render 10 >= priority > 5 correctly", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, priority: 8 }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).toContain("🔔")
  })

  it("render priority < 5 correctly", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, priority: 3 }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).toContain("🎃")
  })

  it("renders late icon correctly", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, dueDate: yesterday }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).toContain("🙀")
  })

  it("does not render late icon", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, dueDate: tomorrow }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).not.toContain("🙀")
  })

  it("renders isCompleted true correctly", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, isCompleted: true }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).toContain("Done")
  })

  it("renders isCompleted false correctly", () => {
    act(() => {
      render(
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <TodoItem todoItem={{ ...payload, isCompleted: false }} />
        </TaskContext.Provider>,
        container
      )
    })
    expect(container.textContent).toContain("To be done")
  })

  
})
