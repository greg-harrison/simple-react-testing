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
  const list = fromList.getIds(state.listByFilter['all']);
  return list.map(id => {
    return id.map(item => {
      return fromById.getTodo(state.byId, item.id)
    }
    )
  });
};

export const getIsFetching = (state) => {
  fromList.getIsFetching(createList)
}

export const getErrorMessage = (state) => {
  fromList.getErrorMessage(createList)
}
