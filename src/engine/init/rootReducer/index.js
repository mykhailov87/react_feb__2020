// Core
import { combineReducers } from 'redux';

// Reducer
import { todosReducer } from '../../core/todos/reducer'

const rootReducer = () => combineReducers({
  todos: todosReducer,
});

export { rootReducer };
