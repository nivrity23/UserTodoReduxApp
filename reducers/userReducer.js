const initialState = {
    users: [
        {
            "id": "user1",
            "name": "John Brown",
            "email": "johnbrown@gmail.com"
        },
        {
            "id": "user2",
            "name": "Jim Green",
            "email": "jingreen@gmail.com"
        },
        {
            "id": "user3",
            "name": "Joe Black",
            "email": "joeblack@gmail.com"
        }
    ]
};

const reducer = (state = initialState, action) => {
    let userData = [];
    switch (action.type) {
        case 'ADD_TO_LIST':
            userData = state.users.slice();
            userData.push(action.payload);
            return { ...state, users: userData };

        case 'REMOVE_FROM_LIST':
            userData = state.users.filter(item => item.id !== action.payload);
            return { ...state, users: userData };

        case 'UPDATE_USER':
            userData = state.users.map(user => {
                const data = action.payload;
                if (user.id === data.id) {
                    user.name = data.name;
                    user.email = data.email;
                }
                return user;
            });
            return { ...state, users: userData };

        default:
            return state;
    }
}

export default reducer;