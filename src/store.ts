import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slicers/taskSlice';

export default configureStore({
    reducer: {
        task: taskReducer
    },
})