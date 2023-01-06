import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const counterSlice = createSlice({
    name:'counterSlice',
    initialState : {counter : 0 },
    reducers : {
        increment : (state , action) => {
            state.count.counter += action.payload.counter;
        },
        decrement : (state , action) => {
            state.count.counter -= action.payload.counter;
        }
    }
})

export const {increment , decrement} = counterSlice.actions;
export default counterSlice.reducer;