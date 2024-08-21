import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({tasks, deleteTask}){

  return(
    <div className="todo-list-container">
     {tasks.map((task) => (
        <ToDoItem task={task} deleteTask={deleteTask} />
     ))}
    </div>
  );
}

export default ToDoList;
