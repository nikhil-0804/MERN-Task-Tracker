import axios from "axios";

const API_URL = "https://mern-task-tracker-bsdg.onrender.com";
// Create Task
export const createTask = async (taskData) => {
    const response = await axios.post(API_URL, taskData);
    return response.data;
};

// Update Task
export const updateTask = async (id, taskData) => {
    const response = await axios.put(`${API_URL}/${id}`, taskData);
    return response.data;
};

// Get All Tasks
export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Delete Task
export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

