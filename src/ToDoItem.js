import React, {useState} from 'react';

/*function DeleteButton({label, onClick}){
  return (
    <button className="square-button" onClick={onClick}> {label} </button>
  );
}*/

function CompletionCheckbox({ isChecked, onChange}){
  return (
    <input type="checkbox" checked={isChecked} onChange={onChange} />
  );
}

function ToDoItem({task, deleteTask, toggleCompletion, onContextMenu}){

  return(
    <div className="todo-item" key={task.id} onContextMenu={onContextMenu} >
      <CompletionCheckbox isChecked={task.completed} onChange={()=>toggleCompletion(task.id)} />
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
    </div>
    );
}

export default ToDoItem;
