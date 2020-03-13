const initialState = {
    todos: [
        {
            "id": "todo1",
            "action": "Going to the movies",
            "date": '01-01-2020'
        },
        {
            "id": "todo2",
            "action": "Going to the office",
            "date": '01-01-2019'
        },
        {
            "id": "todo3",
            "action": "Going out with friends",
            "date": '01-01-2018'
        }
    ]
};

const reducer = (state = initialState, action) => {
    let todoList = [];
    switch (action.type) {
        case 'ADD_TODO':
            todoList = state.todos.slice();
            todoList.push(action.payload);
            return { ...state, todos: todoList };

        case 'DELETE_TODO':
            todoList = state.todos.filter(item => item.id !== action.payload);
            return { ...state, todos: todoList };

        case 'UPDATE_TODO':
            todoList = state.todos.map(todo => {
                const data = action.payload;
                if (todo.id === data.id) {
                    todo.action = data.action;
                    todo.date = data.date;
                }
                return todo;
            });
            return { ...state, todos: todoList };

        default:
            return state;
    }
}

export default reducer;