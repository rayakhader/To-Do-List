
import { useState } from 'react';
import './App.css';
import TasksContainer from './components/TasksContainer';

function App() {
  const initialTasks:Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      completed: true
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      completed: false
    }
  ]
  type Task = {
    id:number,
    title:string,
    description:string,
    completed:boolean
  }
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  // will change later 
  function handleComleteTask(id:number) {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }
  return (
    <div className="App">
      <h1>My Tasks</h1>
      <TasksContainer tasks={tasks} onComplete={handleComleteTask} />
    </div>
  );
}

export default App;
