import { createSlice , current} from "@reduxjs/toolkit";

const todoList = {todoList:[
    {title : 'todo1' , id:1 , completed:false},
    {title : 'todo2' , id:2 , completed:false},
    {title : 'todo3' , id:3 , completed:false}
]}
const todoSlice = createSlice({
    name: 'todoList', 
    initialState: todoList,
    reducers: {
        addTodo : (state , action) => {
            state.todo.todoList = [...state.todo.todoList , action.payload]
        },
        complete: (state , action) => {
            console.log(current(state));
            state.todo.todoList = state.todo.todoList.forEach(todo => {
                if(todo.id === action.payload.id){
                    todo.completed = !todo.completed;
                }
            });
            return state.todo.todoList;
        },
        incomplete: (state , action) => {
            state.todo.todoList = state.todo.todoList.forEach(todo => {
                if(todo.id === action.payload.id){
                    todo.completed = !todo.completed;
                }
            });
        }
    }
});

export const {complete , incomplete , addTodo} = todoSlice.actions;
export default todoSlice.reducer;