import TaskForm from "./TaskForm";

function Task(props) {

  function saveEventDataHandler(enteredEventData) {
    const eventData = {
      ...enteredEventData,
      id: Math.random().toString(),
    };
    console.log(enteredEventData);
    props.onAddEvent(eventData);
  }
  return (
    <div>
      <TaskForm onSaveEventData={saveEventDataHandler} />
    </div>
  );
}

export default Task;