import React, { Fragment, useState } from "react";
import styles from "./Task.module.css";

function TaskForm(props) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const [enteredDay, setDay] = useState("Monday");
  const [enteredHour, setHour] = useState("00:00");
  const [enteredTask, setTask] = useState("");

  const dayChangeHandler = (event) => {
    setDay(event.target.value);
  };

  const hourChangeHandler = (event) => {
    setHour(event.target.value);
  };

  const taskChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const eventData = {
      day: enteredDay,
      hour: enteredHour,
      task: enteredTask,
    };

    props.onSaveEventData(eventData);
    setDay(enteredDay);
    setHour(enteredHour);
    setTask("");
  };

  // deleta all
  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDeleteAll();

    setDay(enteredDay);
    setHour(enteredHour);
    setTask("");
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={styles.task}>
          <input
            type="text"
            value={enteredTask}
            onChange={taskChangeHandler}
            placeholder="Task or issue"
          />

          <select onChange={dayChangeHandler}>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <select onChange={hourChangeHandler}>
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>

          <button type="submit">+ Add Task</button>

          <button type="button" onClick={deleteHandler}>
            - Delete All
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default TaskForm;
