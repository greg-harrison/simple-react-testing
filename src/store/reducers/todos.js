import { combineReducers } from 'redux'
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList()
})

const todos = combineReducers({
  byId,
  listByFilter
})

export default todos

export const getVisibleTodos = (state) => {
  const ids = fromList.getIds(state.listByFilter['all']);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state) => {
  fromList.getIsFetching(createList)
}

export const getErrorMessage = (state) => {
  fromList.getErrorMessage(createList)
}
