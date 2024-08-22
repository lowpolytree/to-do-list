import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({tasks, deleteTask, toggleCompletion}){

  return(
    <div className="todo-list-container">
     {tasks.map((task) => (
        <ToDoItem task={task} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
     ))}
    </div>
  );
}

export default ToDoList;
