import React from 'react'

function Task({task, onComplete, onDelete}) {
  return (
   <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={task.completed} onChange={() => onComplete(task.id)} />
            <p className={`task-description ${task.completed ? 'done' : ''}`}>{task.description}</p>
            <button className='delete-task' onClick={() => onDelete(task.id)}>
                Delete  
            </button>
          </div>
  )
}

export default Task
