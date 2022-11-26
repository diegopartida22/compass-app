import React from 'react'
import TaskItem from './TaskItem'

function TaskList(props) {
    // console.log(props)
    if(props.items.length === 0){
    return (
        <h2>Nothing planned for this day!</h2>

    )
    }

return (
    <ul>
        {props.items.map((task) => (
            <TaskItem key={task.id} task={task.task} day={task.day} hour={task.hour}/>
        ))}        
    </ul>
    )
}


export default TaskList