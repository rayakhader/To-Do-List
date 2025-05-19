import React from 'react'
import Task from './Task'
import AddTask from './AddTask'

function TasksContainer({ tasks, onComplete ,onAdd,onDelete }) {
    return (
        <div className='tasks-container'>
            <div className='header'>
                <h2>My Tasks</h2>
                <AddTask onAdd={onAdd} />
            </div>
            {
                tasks.map((task) => (
                    <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
                ))
            }
        </div>
    )
}

export default TasksContainer
