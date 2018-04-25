import { v4 } from 'node-uuid';
import * as api from '../api'
import { getIsFetching } from '../reducers/createList'

export const fetchTodos = () => (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
  });

  return api.fetchTodos().then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        response,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  );
};

export const addTodo = (title, description) => ({
  type: 'ADD_TODO',
  id: v4(),
  title,
  description
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
