import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { complete, incomplete } from '../slices/todoSlice';

export default function TodoComponent() {
    const todoList = useSelector((state) => {
        return state.todo.todoList;
    }
    
    );
    const dispatch = useDispatch();
  return (
    <div>
        <h2>TodoComponent</h2>
        <ul>
            {
                todoList.map(todo => (<li key={todo.id} >
                    <input type="checkbox" onClick={()=> dispatch(complete())} />
                    {todo.title}
                </li>))
            }
        </ul>
    </div>
  )
}
