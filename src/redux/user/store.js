import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countReducer from '../../slices/counterSlice';
import todoReducer from '../../slices/todoSlice';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    count: countReducer,
    todo: todoReducer
});


export const store = configureStore({
    reducer : rootReducer,
    middleware : [logger]
})
