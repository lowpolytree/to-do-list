import './App.css';
import ToDoForm from './ToDoForm';
import React, {useState} from 'react';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {id: Math.random(), text: task, completed: false};
    setTasks([...tasks, newTask]);
  };
  
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map( task => task.id === id ? {...task, completed: !task.completed} : task);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion}/>
    </div>
  );
}

export default App;
