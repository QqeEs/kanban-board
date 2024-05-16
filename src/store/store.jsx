import { configureStore } from "@reduxjs/toolkit";
import activitySlice from './activitySlice';

export default configureStore({
    reducer: {
        activity: activitySlice,
    },
})