export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DONE_TODO = "DONE_TODO";

export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}


export function editTodo(todo) {
    return {
        type:EDIT_TODO,
        payload: todo,
    }
}
export function doneTodo (id) {
    return {
        type:DONE_TODO,
        payload: id,   
    }}



