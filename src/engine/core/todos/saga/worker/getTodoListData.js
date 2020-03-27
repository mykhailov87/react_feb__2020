// Core
import { apply, call, put, select } from 'redux-saga/effects'
import { setTodoListData, setTodoListDataLoading } from '../../actions'

import Api from '../../../../services/api'

export function* callGetTodoListDataWorker() {
  yield put(setTodoListDataLoading(true));

  try {
    const list = yield select(state => state.todos.list);

    const response = yield apply(Api, Api.getTodoListData, []);
    // const response = yield call([Api, Api.getTodoListData]);
    // const response = yield call(Api.getTodoListData);
    if (response && response.status >= 200 && response.status < 400) {
      const responseData = response.data;
      yield put(setTodoListData(responseData))
    }
  } catch (err) {
    console.error(err)
  }

  yield put(setTodoListDataLoading(false));
}
