import { render } from "@testing-library/react";
import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const [val, setVal] = useState("");
  const [currentPage,setCurrentPage] = useState(1)
  const recordPerPage = 3;
  const handleAddTask = () => {
    if (val) {
      const newVal = {
        name: val,
      };
      const nameCheck = task.filter((el) => el.name === val);
      if (!nameCheck.length) {
        const newTask = [...task, newVal];
        setTask(newTask);
        setVal("");
      }
    }
  };
  const clickHandler = (e) => {
    setVal(e.target.value);
  };

  const deleteHandler = (i) => {
    const newTaskList = [...task];
    newTaskList.splice(i, 1);
    setTask(newTaskList);
  };

  const clearHandler = () => {
    setTask([]);
  };

  const currentPageHandler = (page)=>{
    setCurrentPage(page)
  }

  const totalPageNumber = [];
  for (let i = 1; i <= Math.ceil(task.length / recordPerPage); i++) {
    totalPageNumber.push(i);
  }
  
  const l = recordPerPage*currentPage
  const f = l - recordPerPage
  const subTask = task.slice(f,l)

  return (
    <div className="container">
      <h2>Todo List</h2>
      <input type="text" value={val} onChange={clickHandler} />
      <button onClick={handleAddTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {subTask.map((el, i) => (
            <tr key={i}>
              <td>{el.name}</td>
              <td>
                <button onClick={() => deleteHandler(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="task-count">Total Tasks: {task.length}</div>
      <button onClick={clearHandler}>Clear Task</button>
      <div className="pagination">
        {totalPageNumber.map((el, i) => (
          <button key={i} onClick={()=>currentPageHandler(el)}>{el}</button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
