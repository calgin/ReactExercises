import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Work to React"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }



    return (
        <div className="to-do-list">
            <h1>TO DO LİST</h1>
            <div>
                <input type="text"
                    placeholder="enter a task"
                    value={newTask}
                    onChange={handleInputChange} />
                <button className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                            onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ToDoList
