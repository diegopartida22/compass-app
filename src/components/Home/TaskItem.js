import styles from "./TaskItem.module.css";

function TaskItem(props) {
  return (
    <li style={{ listStyleType: "none" }} className={styles.list}>
      <div className={styles.time}>
        <ul>
          <li>
            <label>{props.hour}</label>
          </li>
        </ul>
      </div>

      <li style={{ listStyleType: "none" }}>
        <div className={styles.task}>
          <div>
            <h2>{props.task}</h2>
          </div>
        </div>
      </li>
    </li>
  );
}

export default TaskItem;
