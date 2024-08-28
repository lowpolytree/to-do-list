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

function ToDoItem({task, deleteTask, toggleCompletion, onContextMenu, editMode, saveTask}){
  const [newText, setNewText] = useState(task.text);

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  const handleSave = () => {
    saveTask(task.id, newText);
    // or exit edit mode here
  }

  return(
    <div className="todo-item" key={task.id} onContextMenu={onContextMenu} >

      {editMode ? (
        <input 
         type="text"
         value={newText}
         onChange={handleInputChange}
         onBlur={handleSave}
         onKeyDown={(e) => e.key === 'Enter' && handleSave()}
        />
      ) : (
        <>
          <CompletionCheckbox isChecked={task.completed} onChange={()=>toggleCompletion(task.id)} />
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
