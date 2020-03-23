// Modules
import { createSelector } from 'reselect';
// Selectors
import { inputValueSelector } from '../search/selectors'

const todosSelector = state => state.todos;

export const isLoadingSelector = createSelector(
  todosSelector,
  todos => todos.isLoading
);

export const listSelector = createSelector(
  todosSelector,
  todos => todos.list,
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
