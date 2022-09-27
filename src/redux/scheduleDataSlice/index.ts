import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export interface IDataScheduleItem {
    id: string,
    begin: string,
    end: string,
    training: string,
    coach: string,
    hall: string,
}
interface IStatus {
    error: string
    status: string,
    value: IDataScheduleItem[]
}

const initialState: IStatus = {
    error: '',
    status: '',
    value: [
        {
            id: '1',
            begin: '08:00',
            end: '08:30',
            training: 'ABC + Stretching',
            coach: 'Шабалкина Жанна',
            hall: 'Зал №2',
        }
    ]
}

export const fetchData = createAsyncThunk(
    'schedule/fetchData',
    async (id,{rejectWithValue}) => {
        try {
            const response = await axios.get( `#` )
            return  await response.data
        } catch (e) {
            rejectWithValue(e)
        }
    }
);

export const scheduleSlice = createSlice({
    name: 'scheduleData',
    initialState,
    reducers: {
        editCell: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { editCell } = scheduleSlice.actions;
export default scheduleSlice.reducer;