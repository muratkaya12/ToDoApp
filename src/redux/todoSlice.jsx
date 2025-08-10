import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //fonksiyonlar
        createTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },

        clearTodos: (state, action) => {
            state.todos = [];
            localStorage.removeItem('todos');
        },

        deleteTodo: (state, action) => {
            state.todos = [...state.todos.filter((todo) => todo.id !== action.payload)];

            if (state.todos.length > 0) {
                localStorage.setItem('todos', JSON.stringify(state.todos));
            } else {
                localStorage.removeItem('todos');
            }

        },

        editeTodo: (state, action) => {
            state.todos = [...state.todos.map((todo) => todo.id !== action.payload.id ? todo : action.payload)];
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },

    },
})

export const { createTodo, clearTodos, deleteTodo, editeTodo } = todoSlice.actions

export default todoSlice.reducer