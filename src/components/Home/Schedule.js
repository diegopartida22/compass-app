import React from "react";

import styles from "./Schedule.module.css";

function Schedule() {
  return (
    <div>
      <div className={styles.schedule}>
        <ul>
          <li>
            <label>Monday</label>
          </li>
          <li>
            <label>Tuesday</label>
          </li>
          <li>
            <label>Wednesday</label>
          </li>
          <li>
            <label>Thursday</label>
          </li>
          <li>
            <label>Friday</label>
          </li>
          <li>
            <label>Saturday</label>
          </li>
          <li>
            <label>Sunday</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Schedule;
