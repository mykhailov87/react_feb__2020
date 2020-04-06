// Core
import { combineReducers } from 'redux-immutablejs';
import { reducer as formReducer } from 'redux-form/immutable'

// Reducer
import { todosReducer } from '../../core/todos/reducer';
import { searchReducer } from '../../core/search/reducer'

const rootReducer = () => combineReducers({
  form: formReducer,
  todos: todosReducer,
  search: searchReducer,
});

export { rootReducer };
