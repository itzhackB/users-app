import { GET_USERS, DELETE_USER, UPDATE_USER, ADD_USER } from "../actions/types"

const usersReducers = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload
        case DELETE_USER:
            return state.filter((user) => user.login.uuid !== action.payload)
        case UPDATE_USER:
            return state = state.map(user => user.id.value === action.payload.id.value ? action.payload : user)
        case ADD_USER:
            return [...state, action.payload]
        default:
            return state
    }
}

export default usersReducers