import React from "react";

function TodoTable({ tasks, deleteTask, updateTaskStatus }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Created Time</th>
          <th>Completed Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td
              className={task.completed ? "completed" : ""}
            >
              {task.name}
            </td>
            <td>
              <select
                value={task.completed ? "Completed" : "Pending"}
                onChange={(e) =>
                  updateTaskStatus(index, {
                    ...task,
                    completed: e.target.value === "Completed",
                  })
                }
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </td>
            <td>{task.createdTime}</td>
            <td>{task.completedTime}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
