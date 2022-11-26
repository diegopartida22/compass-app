import React, { useState } from "react";

import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";

function Tasks(props) {
  const [filteredDay] = useState(props.day);

  const filteredTasks = props.items.filter((event) => {
    // returns a new array
    return event.day === props.day;
  });

  console.log(filteredTasks)

  return (
    <div>
        {/* <TaskFilter selected={filteredDay} day={props.day} /> */}
        <TaskList items={filteredTasks} />
    </div>
  );
}

export default Tasks;