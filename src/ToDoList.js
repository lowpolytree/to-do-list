import React, {useState, useEffect} from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({tasks, deleteTask, toggleCompletion, editTask, saveTask}){
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [activeTaskId, setActiveTaskId] = useState(null);

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setMenuVisible(true);
    setActiveTaskId(id);
  };

  const handleClickOutside = () => {
    setMenuVisible(false);
    setActiveTaskId(null);
  };

  useEffect(() => {
     const handleClick = (e) => {
      //Hide the context menu if clicking outside of it
      if(menuVisible){
        handleClickOutside();
      }
     };
     
     document.addEventListener('click', handleClick);

     return () => {
      document.removeEventListener('click', handleClick);
     };
    }, [menuVisible]);

  return(
    <div className="todo-list-container">
     {tasks.map((task) => (
        <ToDoItem 
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
          onContextMenu={(e) => handleContextMenu(e, task.id)}
          editMode={task.editMode}
          saveTask={saveTask}
        />
     ))}

     {menuVisible && (
      <ul 
        className="context-menu" 
        style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px`, position: 'absolute' }}
      >
        <li onClick={() => { deleteTask(activeTaskId); handleClickOutside(); }}>Delete</li>
        <li onClick={() => {editTask(activeTaskId); handleClickOutside();}}>Edit</li>
      </ul>
      
      )}
    </div>
  );
}

export default ToDoList;
