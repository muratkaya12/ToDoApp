import React, { useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../css/TodoList.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editeTodo } from '../redux/todoSlice';
import CheckIcon from '@mui/icons-material/Check';


function TodoList() {

    const { todos } = useSelector((state) => state.todo)

    const dispatch = useDispatch();

    const [isDeleting, setIsDeleting] = useState();

    const [isEditing, setIsEditing] = useState(false);
    const [editTodo, setEditTodo] = useState();
    const [newTodo, setNewTodo] = useState("");

    const deletedTodo = (id) => {
        setIsDeleting(id)
        setTimeout(() => {
            dispatch(deleteTodo(id));
        }, 1000); // 1 saniye sonra sil
        console.log(todos)

    }


    const editable = (todo) => {
        setIsEditing(!isEditing);
        setEditTodo(todo.id)
        setNewTodo(todo.content)
        editedTodo(todo)
    }

    const editedTodo = (todo) => {
        const payload = {
            id: todo.id,
            content: newTodo
        }
        dispatch(editeTodo(payload))
    }


    return (

        todos && todos.map((todo) => (
            <div key={todo.id} className={`Todolist-cont ${isDeleting === todo.id ? 'deleted' : ''}`}>
                <div className='listed-content'>
                    <DoubleArrowIcon />
                    {isEditing && editTodo === todo.id ? <input type='text' className='edit-input' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : <h3>{todo.content}</h3>}

                </div>
                <div className='content-buttons'>
                    {isEditing && editTodo === todo.id ?
                        <CheckIcon className='content-ico' onClick={() => editable(todo)} /> :
                        <EditNoteIcon className='content-ico' onClick={() => editable(todo)} />}

                    <DeleteForeverIcon onClick={() => deletedTodo(todo.id)} className='content-ico' />
                </div>
            </div>
        ))

    )
}

export default TodoList