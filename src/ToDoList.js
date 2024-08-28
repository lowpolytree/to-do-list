import React, {useState, useEffect} from 'react';
import { SketchPicker } from 'react-color';
import ToDoItem from './ToDoItem';

function ToDoList({tasks, deleteTask, toggleCompletion, editTask, saveTask, updateTaskColor}){
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [color, setColor] = useState('#f9f9f9');

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setMenuVisible(true);
    setActiveTaskId(id);
  };

  const handleClickOutside = () => {
    setMenuVisible(false);
    setColorPickerVisible(false);
    setActiveTaskId(null);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    updateTaskColor(activeTaskId, color.hex);
    handleClickOutside();
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
        <li onClick={() => {setColorPickerVisible(true); setMenuVisible(false)}}>Color</li>
      </ul>
     )}

     {colorPickerVisible && (
      <div style={{ position: 'absolute', top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}>
          <SketchPicker color={color} onChangeComplete={handleColorChange} />
      </div>
     )}
    </div>
  );
}

export default ToDoList;
