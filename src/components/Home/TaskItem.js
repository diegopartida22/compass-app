import styles from "./TaskItem.module.css";

function TaskItem(props) {
  if (props.day === "Monday") {
    return (
      <li style={{ listStyleType: "none" }} className={styles.list}>
        <div className={styles.monday}>
          <div className={styles.time}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.monday}>
            <div className={styles.task}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  if (props.day === "Tuesday") {
    return (
      <li style={{ listStyleType: "none" }} className={styles.list}>
        <div className={styles.tuesday}>
          <div className={styles.time}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.tuesday}>
            <div className={styles.task}>
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
    return (
      <li style={{ listStyleType: "none" }} className={styles.list}>
        <div className={styles.wednesday}>
          <div className={styles.time}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.wednesday}>
            <div className={styles.task}>
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
      <li style={{ listStyleType: "none" }} className={styles.list}>
        <div className={styles.thursday}>
          <div className={styles.time}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.thursday}>
            <div className={styles.task}>
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
      <li style={{ listStyleType: "none" }} className={styles.list}>
        <div className={styles.friday}>
          <div className={styles.time}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.friday}>
            <div className={styles.task}>
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
      <li style={{ listStyleType: "none" }} className={styles.list}>
        <div className={styles.saturday}>
          <div className={styles.time}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.saturday}>
            <div className={styles.task}>
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
      <li style={{ listStyleType: "none" }} className={styles.list}>
        <div className={styles.sunday}>
          <div className={styles.time}>
            <li>
              <label>{props.hour}</label>
            </li>
          </div>
        </div>

        <li style={{ listStyleType: "none" }}>
          <div className={styles.sunday}>
            <div className={styles.task}>
              <div>
                <h2>{props.task}</h2>
              </div>
            </div>
          </div>
        </li>
      </li>
    );
  }

  return <div></div>;
}

export default TaskItem;
