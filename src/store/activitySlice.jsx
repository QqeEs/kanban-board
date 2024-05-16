import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const getRandomActivity = createAsyncThunk(
    'activities/getRandomActivity',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://www.boredapi.com/api/activity/');
            const { activity, type, participants, price } = res.data;
            return { key: uuidv4(), activity: activity, type: type, participants: participants, price: price, status: 'todo' };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const activitySlice = createSlice({
    name: 'activities',
    initialState: {
        activity: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRandomActivity.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRandomActivity.fulfilled, (state, action) => {
                state.loading = false;
                state.activity = action.payload;
            })
            .addCase(getRandomActivity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default activitySlice.reducer;
