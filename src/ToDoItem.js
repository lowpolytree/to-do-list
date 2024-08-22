import React, {useState} from 'react';

function DeleteButton({label, onClick}){
  return (
    <button className="square-button" onClick={onClick}> {label} </button>
  );
}

function CompletionCheckbox({ isChecked, onChange}){
  return (
    <input type="checkbox" checked={isChecked} onChange={onChange} />
  );
}

function ToDoItem({task, deleteTask, toggleCompletion}){

  return(
    <div className="todo-item" key={task.id}>
      <CompletionCheckbox isChecked={task.completed} onChange={()=>toggleCompletion(task.id)} />
      <DeleteButton label="x" onClick={() => deleteTask(task.id)} />
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
  </div>
    );
}

export default ToDoItem;
