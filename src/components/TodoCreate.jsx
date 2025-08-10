import { TextField } from '@mui/material'
import React, { useState } from 'react'
import '../css/TodoCreate.css'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { createTodo, clearTodos } from '../redux/todoSlice'
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddBoxIcon from '@mui/icons-material/AddBox';

function TodoCreate() {

    const [addTodo, setAddTodo] = useState('')
    const dispatch = useDispatch();

    const addNewTodo = () => {

        if (addTodo.trim().length === 0) {
            toast.warn('Lütfen bir görev yazınız !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return
        } else {

            const payload = {
                id: Math.floor(Math.random() * 9999999),
                content: addTodo
            }

            dispatch(createTodo(payload));
            setAddTodo('');
        }

    }

    const clearAllTodos = () => {
        dispatch(clearTodos())
    }

    return (
        <div className='create-cont'>
            <div className='create-bar'>
                <input type="text" value={addTodo} onChange={(e) => setAddTodo(e.target.value)} placeholder='Planınızı Ekleyin...' />
                <button className='add-button' onClick={addNewTodo}><AddBoxIcon />Görev Ekle</button>
            </div>
            <div>
                <button className='allclear-button' onClick={clearAllTodos} ><ClearAllIcon /> Hepsini Temizle</button>
            </div>
        </div>
    )
}

export default TodoCreate