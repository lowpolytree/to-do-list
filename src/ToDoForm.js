import React, {useState} from 'react';

function ToDoForm({addTask}) {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value = {input}
        onChange={(e) => setInput(e.target.value)}
      />
        <button type="submit">Add Task</button>
      </form>
  );
}

export default ToDoForm;
