// Modules
import { List } from 'immutable'
import { createSelector } from 'reselect';
// Selectors
import { inputValueSelector } from '../search/selectors'

const todosSelector = state => state.getIn(['todos'], List());

export const isLoadingSelector = createSelector(
  todosSelector,
  todos => todos.get('isLoading')
);

export const listSelector = createSelector(
  todosSelector,
  todos => todos.getIn(['list'], List()),
);

export const filteredListSelector = createSelector(
  listSelector,
  inputValueSelector,
  (list, inputValue) => {
    if (!inputValue.trim()) {
      return list;
    }
    return list.filter(item => item.title.toLowerCase().includes(inputValue))
  }
);

export const isDoneSelector = createSelector(
  listSelector,
  (list) => {
    return list.filter(todoItem => todoItem.isDone)
  }
);
