// import "./TaskCard.css";

// function TaskCard({ task, handleDelete, setEditTask }) {
//     return (
//         <div>
//             <h3>{task.title}</h3>

//             <p>{task.description}</p>

//             <p>{task.status}</p>

//             <button
//                 onClick={() => {
//                     console.log(task);
//                     setEditTask(task);
//                 }}
//             >
//                 Edit
//             </button>

//             <button onClick={() => handleDelete(task._id)}>
//                 Delete
//             </button>

//         </div>
//     );
// }

// export default TaskCard;

import "./TaskCard.css";

function TaskCard({ task, handleDelete, setEditTask }) {
    return (
        <div className="task-card">

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <span
                className={
                    task.status === "Completed"
                        ? "status completed"
                        : "status pending"
                }
            >
                {task.status}
            </span>

            <div className="card-buttons">

                <button
                    className="edit-btn"
                   onClick={() => setEditTask(task)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => handleDelete(task._id)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;