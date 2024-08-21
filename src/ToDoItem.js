import React from 'react';

function DeleteButton({label, onClick}){
  return (
    <button className="square-button" onClick={onClick}> {label}
    </button>
  );
}

function ToDoItem({task, deleteTask}){

  return(
    <div className="todo-item" key={task.id}>
      <DeleteButton label="x" onClick={() => deleteTask(task.id)} />
      <span className="task-text">{task.text}</span>
  </div>
    );
}

export default ToDoItem;
