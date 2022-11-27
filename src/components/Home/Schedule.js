import React, { useState } from "react";
import styles from "./Schedule.module.css";
import Tasks from "./Tasks";
import NewTask from "./NewTask/NewTask";

function Schedule(props) {
  const [tasks, setTasks] = useState([]);

  const addEventHandler = (event) => {
    setTasks((prevEvents) => {
      return [event, ...prevEvents];
    });
  };

  const [day, setDay] = useState("");

  return (
    <>
      <NewTask onAddEvent={addEventHandler} />
      <div>
        <div className={styles.schedule}>
          <ul>
            <li onClick={() => setDay("Monday")}>
              <label>Monday</label>
            </li>
            <li onClick={() => setDay("Tuesday")}>
              <label>Tuesday</label>
            </li>
            <li onClick={() => setDay("Wednesday")}>
              <label>Wednesday</label>
            </li>
            <li onClick={() => setDay("Thursday")}>
              <label>Thursday</label>
            </li>
            <li onClick={() => setDay("Friday")}>
              <label>Friday</label>
            </li>
            <li onClick={() => setDay("Saturday")}>
              <label>Saturday</label>
            </li>
            <li onClick={() => setDay("Sunday")}>
              <label>Sunday</label>
            </li>
          </ul>
        </div>

        <div className={styles.time}>
          <ul>
            <li>
              <label>Time</label>
            </li>
          </ul>
        </div>
      </div>

      <Tasks items={tasks} day={day} />
    </>
  );
}

export default Schedule;
