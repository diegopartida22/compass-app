import React, { Fragment } from "react";

function AddTask() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Fragment>
      <div>
        <label htmlFor="task">Add Task</label>
        <input type="text" name="task" id="task" />
        <label htmlFor="day">Day</label>
        <select name="day" id="day">
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  );
}

export default AddTask;
