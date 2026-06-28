import "./TaskForm.css";
import { useState, useEffect } from "react";
import { createTask, updateTask } from "../services/taskService";


function TaskForm({
    tasks,
    setTasks,
    editTask,
    setEditTask,
}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");

    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDescription(editTask.description);
            setStatus(editTask.status);
        }
    }, [editTask]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const taskData = {
            title,
            description,
            status,
        };

        try {

            if (editTask) {

                const updatedTask = await updateTask(editTask._id, taskData);

                setTasks(
                    tasks.map((task) =>
                        task._id === updatedTask._id ? updatedTask : task
                    )
                );

                setEditTask(null);

                alert("Task Updated Successfully!");

            } else {

                const newTask = await createTask(taskData);

                setTasks([...tasks, newTask]);

                alert("Task Added Successfully!");
            }

            setTitle("");
            setDescription("");
            setStatus("Pending");

        } catch (error) {

            console.log(error);

            alert("Something went wrong!");

        }
    };

    return (
       <div className="task-form">

            <h2>Add New Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <br /><br />

                <textarea
                   placeholder="Enter task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <br /><br />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >

                    <option>Pending</option>

                    <option>Completed</option>

                </select>

                <br /><br />

                <button className="add-btn">
                    {editTask ? "Update Task" : "Add Task"}
                </button>

            </form>

        </div>
    );
}

export default TaskForm;