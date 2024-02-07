import { createSlice } from '@reduxjs/toolkit'
import { count } from 'mathjs';

const initialState = {
    count: 0
}

export const CounterSlices = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0
        },
        addByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, reset, addByAmount } = CounterSlices.actions;
export default CounterSlices.reducer;