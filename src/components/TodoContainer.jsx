import React from 'react'
import TodoCreate from './TodoCreate'
import '../css/TodoContainer.css'
import TodoList from './TodoList'

function TodoContainer() {
    return (
        <div className='TodoContainer'>
            <TodoCreate />
            <TodoList />
        </div>
    )
}

export default TodoContainer