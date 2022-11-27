import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

function TaskList(props) {
  // console.log(props)
  if (props.items.length === 0) {
    return (
      <div className={styles.taskList}>
        <h2>Nothing planned for this day!</h2>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {props.items.map((task) => (
          <TaskItem
            key={task.id}
            task={task.task}
            day={task.day}
            hour={task.hour}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
