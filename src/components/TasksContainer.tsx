import React from 'react'
import Task from './Task'

function TasksContainer({tasks,onComplete}) {
  return (
    <div>
        {
        tasks.map((task) => (
          <Task task={task} onComplete={onComplete}/>
        ))
      }
    </div>
  )
}

export default TasksContainer
