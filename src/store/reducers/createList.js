import { combineReducers } from 'redux';

const createList = () => {
  const handleToggle = (state, action) => {
    const { result: toggledId, entities } = action.response;
    const { completed } = entities.todos[toggledId];
    return state.filter(id => id !== toggledId);
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return [...state, action.response.result];
      case 'ADD_TODO_SUCCESS':
        return [...state, action.response.result];
      case 'TOGGLE_TODO_SUCCESS':
        return handleToggle(state, action);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true;
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_FAILURE':
        return action.message;
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
