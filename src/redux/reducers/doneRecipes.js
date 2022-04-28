import { GET_LOCAL_STORAGE } from '../actions';

const INITIAL_STATE = [];

const doneRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.doneRecipes;
  default:
    return state;
  }
};

export default doneRecipes;
