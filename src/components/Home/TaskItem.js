import classes from "./TaskItem.module.css";

function TaskItem(props) {
  if (props.day === "Monday") {
    return (
      <div className={classes.mondayItem}>
        <li style={{ listStyleType: "none" }} className={classes.listItem}>
          <div className={classes.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>

          <li style={{ listStyleType: "none" }}>
            <div className={classes.taskItem}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </li>
        </li>
      </div>
    );
  }

  if (props.day === "Tuesday") {
    return (
      <li style={{ listStyleType: "none" }} className={classes.listItem}>
        <div className={classes.tuesdayItem}>
          <div className={classes.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={classes.tuesdayItem}>
            <div className={classes.taskItem}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  if (props.day === "Wednesday") {
    // if the hour is the same as the hour in the task, then the task will be displayed in the same row as the hour
    return (
      <li style={{ listStyleType: "none" }} className={classes.listItem}>
        <div className={classes.wednesdayItem}>
          <div className={classes.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={classes.wednesdayItem}>
            <div className={classes.taskItem}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  if (props.day === "Thursday") {
    return (
      <li style={{ listStyleType: "none" }} className={classes.listItem}>
        <div className={classes.thursdayItem}>
          <div className={classes.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={classes.thursdayItem}>
            <div className={classes.taskItem}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  if (props.day === "Friday") {
    return (
      <li style={{ listStyleType: "none" }} className={classes.listItem}>
        <div className={classes.fridayItem}>
          <div className={classes.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={classes.fridayItem}>
            <div className={classes.taskItem}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  if (props.day === "Saturday") {
    return (
      <li style={{ listStyleType: "none" }} className={classes.listItem}>
        <div className={classes.timeItem}>
          <li>
            <div className={classes.saturdayItem}>
              <label>{props.hour}</label>
            </div>
          </li>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={classes.saturdayItem}>
            <div className={classes.taskItem}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  if (props.day === "Sunday") {
    return (
      <li style={{ listStyleType: "none" }} className={classes.listItem}>
        <div className={classes.sundayItem}>
          <div className={classes.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={classes.sundayItem}>
            <div className={classes.taskItem}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  return (
    <div>
      <h1>Something went wrong</h1>
    </div>
  );
}

export default TaskItem;
