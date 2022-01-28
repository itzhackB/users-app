import { ADD_ERR } from '../actions/types';

const errReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ERR:
      return action.payload;
    default:
      return state
  }
};

export default errReducer;
