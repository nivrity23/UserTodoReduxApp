export function addUser(payload) {
    console.log('action', payload)
    return {
        type: 'ADD_TO_LIST',
        payload
    };
}

export function removeUser(id) {
    return {
        type: 'REMOVE_FROM_LIST',
        payload: id
    };
}

export function updateUser(userDetails) {
    return {
        type: 'UPDATE_USER',
        payload: userDetails
    };
}