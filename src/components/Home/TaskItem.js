import styles from "./TaskItem.module.css";

function TaskItem(props) {
  if (props.day === "Monday") {
    return (
      <div className={styles.mondayItem}>
        <li style={{ listStyleType: "none" }} className={styles.listItem}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>

          <li style={{ listStyleType: "none" }}>
            <div className={styles.taskItem}>
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
      <li style={{ listStyleType: "none" }} className={styles.listItem}>
        <div className={styles.tuesdayItem}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.tuesdayItem}>
            <div className={styles.taskItem}>
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
      <li style={{ listStyleType: "none" }} className={styles.listItem}>
        <div className={styles.wednesdayItem}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.wednesdayItem}>
            <div className={styles.taskItem}>
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
      <li style={{ listStyleType: "none" }} className={styles.listItem}>
        <div className={styles.thursdayItem}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.thursdayItem}>
            <div className={styles.taskItem}>
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
      <li style={{ listStyleType: "none" }} className={styles.listItem}>
        <div className={styles.fridayItem}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.fridayItem}>
            <div className={styles.taskItem}>
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
      <li style={{ listStyleType: "none" }} className={styles.listItem}>
        <div className={styles.timeItem}>
          <li>
            <div className={styles.saturdayItem}>
              <label>{props.hour}</label>
            </div>
          </li>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.saturdayItem}>
            <div className={styles.taskItem}>
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
      <li style={{ listStyleType: "none" }} className={styles.listItem}>
        <div className={styles.sundayItem}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.sundayItem}>
            <div className={styles.taskItem}>
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
