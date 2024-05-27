import { createSlice } from "@reduxjs/toolkit"

interface Task {
    id: number;
    name: string;
    isComplete: boolean;
}

// Get tasks from local storage if available else set it to an empty array
const initialState = localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks") as string) as Task[] : [] as Task[];

export const taskSlice = createSlice({
    name: "task", // Name of the slice
    initialState, // Set the initial state to the tasks from local storage
    reducers: {
        addTask: (state, action) => {
            state = [action.payload, ...state]; // Add the new task to the beginning of the array
            localStorage.setItem("tasks", JSON.stringify(state)); // Save the tasks to local storage
            return state; 
        },
        deleteTask: (state, action) => {
            state = state.filter(task => task.id !== action.payload); // Filter out the task with the given id
            localStorage.setItem("tasks", JSON.stringify(state)); 
            return state;
        },
        toggleTask: (state, action) => {
            // Toggle the isComplete property of the task with the given id
            state = state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        isComplete: !task.isComplete
                    }; // Return the task with the isComplete property toggled
                }
                return task; // Return the task as it is if the id doesn't match
            });
            localStorage.setItem("tasks", JSON.stringify(state)); 
            return state;
        },
    
    }
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions; // Export the actions
export const selectTasks = (state: { task: Task[] }) => state.task; // Export the selector


export default taskSlice.reducer; // Export the reducer