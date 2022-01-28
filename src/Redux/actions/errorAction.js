import { ADD_ERR } from "./types"

export const errHandle = (err) => {
    return {
        type: ADD_ERR,
        payload: err.message
    }
}