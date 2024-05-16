import { useEffect, useState } from 'react';
import CreateActivity from './components/CreateActivity';
import TaskSections from './components/TaskSections';


import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

  // console.log('tasks', tasks)

  useEffect(() =>{
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <CreateActivity tasks={tasks} setTasks={setTasks}/>
        <TaskSections tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
