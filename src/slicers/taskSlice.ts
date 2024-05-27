import { createSlice } from "@reduxjs/toolkit"

interface Task {
    id: number;
    name: string;
    isComplete: boolean;
}

const initialState = localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks") as string) as Task[] : [] as Task[];

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state = [action.payload, ...state];
            localStorage.setItem("tasks", JSON.stringify(state));
            return state;
        },
        deleteTask: (state, action) => {
            state = state.filter(task => task.id !== action.payload);
            localStorage.setItem("tasks", JSON.stringify(state));
            return state;
        },
        toggleTask: (state, action) => {
            console.log("toggling task", action.payload)
            state = state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        isComplete: !task.isComplete
                    };
                }
                return task;
            });
            localStorage.setItem("tasks", JSON.stringify(state));
            return state;
        },
    
    }
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export const selectTasks = (state: { task: Task[] }) => state.task;


export default taskSlice.reducer;