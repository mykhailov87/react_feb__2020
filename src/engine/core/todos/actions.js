import { SET_TODO_LIST_DATA } from './types'
import Api from '../../services/api'

export const setTodoListData = (data) => {
  return {
    type: SET_TODO_LIST_DATA,
    payload: data
  }
};

export const setTodoListDataLoading = (isLoading) => ({
  type: 'SET_TODO_LIST_DATA_LOADING',
  payload: isLoading,
});

export const getTodoListData = () => {
  return (dispatch) => {
    dispatch(setTodoListDataLoading(true)); // <- Включили лоадер

    setTimeout(() => {
      Api.getTodoListData()
        .then((res) => {
          dispatch(setTodoListData(res.data)) // <- Записали данные в store
        })
        .catch(() => {
          // TODO: add action for handle error  // <- Обработали ошибку
        })
        .finally(() => {
          dispatch(setTodoListDataLoading(false)) // <- Выключили лоадер
        })
    }, 3 * 1000)
  }
}
