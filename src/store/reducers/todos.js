import { combineReducers } from 'redux'
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const initialState = []

const todoUpdates = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

const todos = combineReducers({
  byId,
  todoUpdates
})

export default todos

export const getVisibleTodos = (state) => {
  console.log('fromList.getIds(createList);', fromList.getIds(createList));
  const ids = fromList.getIds(createList);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state) => {
  fromList.getIsFetching(createList)
}

export const getErrorMessage = (state) => {
  fromList.getErrorMessage(createList)
}
