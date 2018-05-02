import { normalize } from 'normalizr';
import * as schema from './schema';
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
        response: normalize(response, schema.arrayOfTodos),
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

export const addTodo = (text, description) => (dispatch) =>
  api.addTodo(text, description).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });


export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });
