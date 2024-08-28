import './App.css';
import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {id: Math.random(), text: task, completed: false, editMode: false, bgcolor: '#f9f9f9'};
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

  const updateTaskColor = (id, color) =>{
    //console.log(`Updating task ${id} with color ${color}`);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? {...task, bgcolor: color } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
        editTask={editTask}
        saveTask={saveTask}
        updateTaskColor={updateTaskColor}
      />
    </div>
  );
}

export default App;
