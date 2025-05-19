import React from 'react'

function AddTask({onAdd}) {
    const [task, setTask] = React.useState("");
    function handleAddTask(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value);
    }
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (task.trim() === "") alert("Please enter a task");
        onAdd(task)
        setTask("");
    }
    return (
        <div>
            <input type="text" onChange={handleAddTask} value={task} placeholder='Add new task...' />
            <button className='add-task' onClick={handleSubmit} >
                + Add Task
            </button>
        </div>
    )
}

export default AddTask
