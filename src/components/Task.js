import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {deleteTodo, editTodo,doneTodo} from '../redux/actions';
// import '../App.css';
import { todos } from '../redux/states';
function TodoItem({todo}) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    // row mx-2 align-items-center
    return (

        <div className="container">
            <div>#{
                todo.id.length > 1 ? todo.id[2] : todo.id
            }</div>
            <div> {
                editable ? <input type="text"
                    value={name}
                    onChange={
                        (e) => {
                            setName(e.target.value);
                        }
                    }/> : <h4>{
                    todo.name
                }</h4>
            } </div>
            <button variant="secondary" onClick={
                () => {
                    dispatch(editTodo({
                        ...todo,
                        name: name
                    }))
                    if (editable) {
                        setName(todo.name);
                    }
                    setEditable(!editable);
                }
            }>
                {
                editable ? "Update" : "Edit"
            }</button>
               
                <button variant="secondary" onClick={
                () => dispatch(deleteTodo(todo.id))
            }>Delete</button>
             <button variant="secondary" onClick={()=>dispatch(doneTodo(todo.id))}>{todo.done ? "done": "undone"}</button>
             
        </div>

    )
}

export default TodoItem
