import styles from "./TaskItem.module.css";

function TaskItem(props) {
  // return (
  //   <div className={`${styles.day} ${{ [props.day]: styles[props.day] }}`}>
  //     <li style={{ listStyleType: "none" }} className={styles.listItem}>
  //       <div className={styles.timeItem}>
  //         <li>
  //           <label>{props.hour}</label>
  //         </li>
  //       </div>

  //       <li style={{ listStyleType: "none" }}>
  //         <div className={styles.taskItem}>
  //           <div>
  //             <h2>{props.task}</h2>
  //           </div>
  //         </div>
  //       </li>
  //     </li>
  //   </div>
  // );

  if (props.day === "Monday") {
    return (
      <div className={styles.monday}>
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
        <div className={styles.tuesday}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.tuesday}>
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
        <div className={styles.wednesday}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.wednesday}>
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
        <div className={styles.thursday}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.thursday}>
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
        <div className={styles.friday}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.friday}>
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
            <div className={styles.saturday}>
              <label>{props.hour}</label>
            </div>
          </li>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.saturday}>
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
        <div className={styles.sunday}>
          <div className={styles.timeItem}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.sunday}>
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
