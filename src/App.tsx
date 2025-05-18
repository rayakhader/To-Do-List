
import { useState } from 'react';
import './App.css';
import TasksContainer from './components/TasksContainer';

function App() {
  const initialTasks:Task[] = [
    {
      id: 1,
      description: 'Description for Task 1',
      completed: false
    },
    {
      id: 2,
      description: 'Description for Task 2',
      completed: true
    },
    {
      id: 3,
      description: 'Description for Task 3',
      completed: false
    }
  ]
  type Task = {
    id:number,
    description:string,
    completed:boolean
  }
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  // will change later 
  function handleComleteTask(id:number) {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }
  function handleAddTask(description:string) {
    const newTask:Task = {
      id: tasks.length + 1,
      description: description,
      completed: false
    }
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TasksContainer tasks={tasks} onComplete={handleComleteTask} onAdd={handleAddTask}/>
    </div>
  );
}

export default App;
