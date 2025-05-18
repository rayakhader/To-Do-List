import React from 'react'

function Task({task, onComplete}) {
  return (
   <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={task.completed} onChange={() => onComplete(task.id)} />
            <p>{task.description}</p>
        
          </div>
  )
}

export default Task
