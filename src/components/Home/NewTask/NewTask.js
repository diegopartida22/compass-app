import TaskForm from "./TaskForm";

function Task(props) {
  function saveEventDataHandler(enteredEventData) {
    const eventData = {
      ...enteredEventData,
      id: Math.random().toString(),
    };
    props.onAddEvent(eventData);
  }

  function deleteEventHandler() {
    props.onDeleteEvent(props.id);
    // delete all tasks
    props.onDeleteAll();
  }

  return (
    <div>
      <TaskForm
        onSaveEventData={saveEventDataHandler}
        onDeleteAll={deleteEventHandler}
      />
    </div>
  );
}

export default Task;
