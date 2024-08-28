import './App.css';
import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {id: Math.random(), text: task, completed: false, editMode: false};
    setTasks([...tasks, newTask]);
  };
  
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const editTask = (id) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) =>
        task.id === id ? { ...task, editMode: true } : { ...task, editMode: false }
      )
    );
  };

  const saveTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText, editMode: false } : task
      )
    );
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map( task => task.id === id ? {...task, completed: !task.completed} : task);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion} editTask={editTask} saveTask={saveTask}/>
    </div>
  );
}

export default App;
