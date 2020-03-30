// Core
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// Reducer
import { todosReducer } from '../../core/todos/reducer';
import { searchReducer } from '../../core/search/reducer'

const rootReducer = () => combineReducers({
  form: formReducer,
  todos: todosReducer,
  search: searchReducer,
});

export { rootReducer };
