import React, { Fragment } from "react";
import styles from "./Task.module.css";

function Task() {
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

  // const [selectedDay, setSelectedDay] = React.useState("Monday");
  // const [selectedHour, setSelectedHour] = React.useState("12:00");

  // const tasks = [
  //   {
  //     id: 1,
  //     day: "Monday",
  //     task: "Do the dishes",
  //     time: "10:00",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     day: "Monday",
  //     task: "Do the laundry",
  //     time: "11:00",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     day: "Tuesday",
  //     task: "Do the dishes",
  //     time: "10:00",
  //     completed: false,
  //   },
  // ];

  return (
    <Fragment>
      <div className={styles.task}>
        <input type="text" name="task" id="task" placeholder="Task or issue" />

        <select name="day" id="day">
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select name="time" id="time">
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>

        <button type="submit">+ Add Task</button>

        <button type="submit">- Delete All</button>
      </div>
    </Fragment>
  );
}

export default Task;
