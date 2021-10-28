import { ADD_TODO, EDIT_TODO, DELETE_TODO,DONE_TODO } from './actions';
import { todos } from './states';
import { v4 as uuidv4  } from 'uuid';
export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        case EDIT_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }
            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            case DONE_TODO:
            newTodos = [...state];  
            newTodos.map(el=>(el.id===action.payload.id ? {...el, done:!el.done}:el));
            return newTodos;
           default:
                return state
        }
}
