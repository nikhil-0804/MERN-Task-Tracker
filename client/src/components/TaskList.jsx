import "./TaskList.css";
import { useEffect } from "react";
import { getTasks, deleteTask } from "../services/taskService";
import TaskCard from "./TaskCard";


function TaskList({
    tasks,
    setTasks,
    setEditTask,
    search,
    filter,
    sort,
}) {

    useEffect(() => {
        getTasks()
            .then((data) => {
                setTasks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteTask(id);

            setTasks(tasks.filter((task) => task._id !== id));

            alert("Task Deleted Successfully!");

        } catch (error) {

            console.log(error);

            alert("Something went wrong!");

        }
    };

    const filteredTasks = tasks
        .filter((task) => {

            const matchesSearch =
                task.title.toLowerCase().includes(search.toLowerCase());

            const matchesFilter =
                filter === "All" || task.status === filter;

            return matchesSearch && matchesFilter;

        })
        .sort((a, b) => {

            if (sort === "Latest") {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }

            return new Date(a.createdAt) - new Date(b.createdAt);

        });

    return (
        <div className="task-list">

            <h2>All Tasks</h2>
            <div className="task-grid">

                {filteredTasks.length === 0 ? (

                    <p className="empty">
                        No Tasks Found 😔
                    </p>

                ) : (

                    filteredTasks.map((task) => (
                        <TaskCard
                            key={task._id}
                            task={task}
                            handleDelete={handleDelete}
                            setEditTask={setEditTask}
                        />
                    ))

                )}

            </div>

        </div>
    );
}

export default TaskList;