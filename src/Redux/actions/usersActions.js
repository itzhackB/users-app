import axios from "axios"
import { GET_USERS, DELETE_USER, UPDATE_USER, ADD_USER } from "./types"

export const getUsers = () => async dispatch => {
    const response = await axios.get('https://randomuser.me/api/?results=10')
    await dispatch({ type: GET_USERS, payload: response.data.results })
}

export const deletUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }

}