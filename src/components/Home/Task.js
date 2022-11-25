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
    "12:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
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

        <select name="am or pm" id="am or pm">
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>

        <button type="submit">+ Add Task</button>

        <button type="submit">- Delete All</button>
      </div>
    </Fragment>
  );
}

export default Task;
