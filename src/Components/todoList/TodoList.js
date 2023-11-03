import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoTable from './TodoTable';
import Pagination from './Pagination';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = tasks.slice(indexOfFirstItem, indexOfLastItem);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <TodoInput addTask={addTask} />
      {tasks.length > 0? 
        <TodoTable
          tasks={currentTasks}
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
        />:null
      }
      {tasks.length > 0 && (
        <div className="task-count">Total Tasks: {tasks.length}</div>
      )}
      {tasks.length > 0 && (
        <button className="clear-button" onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      )}
      <Pagination
        tasks={tasks}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default TodoList;