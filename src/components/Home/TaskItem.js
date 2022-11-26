import styles from "./TaskItem.module.css";

function TaskItem(props) {
  return (
    <li style={{ listStyleType: "none" }}>
      <div className={styles.task}>
        <div>
          <h2>{props.task}</h2>
        </div>

        <div className={styles.time}>
          <ul>
            <label>{props.hour}</label>
          </ul>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
