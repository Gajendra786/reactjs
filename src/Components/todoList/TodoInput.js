import React, { useState } from 'react';

function TodoInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue !== '') {
      addTask({
        name: inputValue,
        completed: false,
        createdTime: new Date().toLocaleString(),
        completedTime: null,
      });
      setInputValue('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TodoInput;
