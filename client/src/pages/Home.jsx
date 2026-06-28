import { useState } from "react";
import "./Home.css";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


function Home() {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Latest");

    return (
        <div className="container">
           <h1>📋 Task Tracker</h1>
<p>Organize and manage your daily tasks efficiently.</p>

<div className="toolbar">

    <input
        type="text"
        placeholder="Search Task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />

    <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    >
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
    </select>

    <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
    >
        <option>Latest</option>
        <option>Oldest</option>
    </select>

</div>

            <TaskForm
                tasks={tasks}
                setTasks={setTasks}
                editTask={editTask}
                setEditTask={setEditTask}
            />

            <TaskList
                tasks={tasks}
                setTasks={setTasks}
                setEditTask={setEditTask}
                search={search}
                filter={filter}
                sort={sort}
            />
        </div>
    );
}

export default Home;