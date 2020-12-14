import React, { useState } from "react";

const TodoCreate = () => {
  const now = new Date();
  const nowString = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}`;
  const [textInput, setTextInput] = useState("");
  const [dateInput, setDateInput] = useState(nowString);

  const handleOnDateChange = (e) => {
    const value = e.target.value;
    setDateInput(value);
    const [year, month, date] = value.split("-");
    const newDate = new Date(year, month - 1, date);
    console.log(newDate.toDateString());
  };

  return (
    <form>
      <input
        type="text"
        placeholder="new todo"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <input
        type="date"
        placeholder="2020-12-01"
        value={dateInput}
        onChange={handleOnDateChange}
      />
    </form>
  );
};

export default TodoCreate;
