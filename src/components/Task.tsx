import React from 'react'

function Task({task, onComplete}) {
  return (
   <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={onComplete}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
  )
}

export default Task
