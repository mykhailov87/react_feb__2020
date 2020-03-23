// Core
import { combineReducers } from 'redux';

// Reducer
import { todosReducer } from '../../core/todos/reducer';
import { searchReducer } from '../../core/search/reducer'

const rootReducer = () => combineReducers({
  todos: todosReducer,
  search: searchReducer,
});

export { rootReducer };
