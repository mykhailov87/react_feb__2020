// Modules
import React, { useCallback, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
// Engine
import Api from '../../engine/services/api'
// Actions
import { setTodoListData } from '../../engine/core/todos/actions'

class TodoList extends React.Component {
  componentDidMount() {
    this.getTodoListData()
  }

  getTodoListData = () => {
    const { getTodoListData } = this.props;
    Api.getTodoListData()
      .then((res) => {
        getTodoListData(res.data);
      })
      .catch(() => {})
  };

  render() {
    const { list } = this.props;
    return (
      <div>TodoList, {JSON.stringify(list)}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.todos.list,
});

const mapDispatchToProps = (dispatch) => ({
  getTodoListData: (data) => dispatch(setTodoListData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


function useTodoListData() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.todos.list);

  const getRequest = useCallback(() => {
    dispatch({ type: 'GET_TODO_LIST_DATA_ASYNC' })
  }, [dispatch]);

  return {
    data: list,
    getRequest
  }
}

function Component(props) {
  const dispatch = useDispatch();
  const { data, getRequest } = useTodoListData();

  useEffect(() => {
    getRequest()
    // Api.getTodoListData()
    //   .then((res) => {
    //     dispatch(setTodoListData(res.data));
    //   })
    //   .catch(() => {});

  }, [dispatch]);

  return data.map((item, idx) => <div key={idx}>{item.name}</div>)
}

export const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
