export function addTodo(payload) {
    console.log('action', payload)
    return {
        type: 'ADD_TODO',
        payload
    };
}

export function removeTodo(id) {
    return {
        type: 'DELETE_TODO',
        payload: id
    };
}

export function updateTodo(todoDetails) {
    console.log('todoAction', todoDetails);
    return {
        type: 'UPDATE_TODO',
        payload: todoDetails
    };
}