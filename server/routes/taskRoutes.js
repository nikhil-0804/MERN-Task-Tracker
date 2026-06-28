const express = require("express");

const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

// Get All Tasks
router.get("/tasks", getTasks);

// Create Task
router.post("/tasks", createTask);

// Update Task
router.put("/tasks/:id", updateTask);

// Delete Task
router.delete("/tasks/:id", deleteTask);

module.exports = router;