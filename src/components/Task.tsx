import React from 'react'

function Task({task, onComplete}) {
  return (
   <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={onComplete}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
  )
}

export default Task
