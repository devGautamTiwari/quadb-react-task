import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slicers/taskSlice'; // Import the task reducer

export default configureStore({
    reducer: {
        task: taskReducer
    }, // Add the task reducer to the store
})