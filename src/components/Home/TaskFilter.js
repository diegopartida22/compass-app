function TaskFilter(props) {
  function downChangedHandler(event) {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div>
      <div>
        <label>{props.day}</label>
        <select value={props.selected} onChange={downChangedHandler}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
    </div>
  );
}

export default TaskFilter;
