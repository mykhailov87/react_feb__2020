// Modules
import React, { useCallback, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
// Component
import Input from '../Input'
// Engine
import Api from '../../engine/services/api'
// Actions
import { getTodoListData } from '../../engine/core/todos/actions'
// Selectors
import { filteredListSelector, isLoadingSelector } from '../../engine/core/todos/selectors'

class TodoList extends React.Component {
  componentDidMount() {
    this.getTodoListDataAsync()
  }

  getTodoListDataAsync = () => {
    const { getTodoListDataAsync } = this.props;
    getTodoListDataAsync();
  };

  render() {
    const { list, isLoading } = this.props;
    return (
      <>
        <Input />
        {isLoading
          ? <div>Loading...</div>
          : list.map((item) => <div key={item.id}>{item.title}</div>)
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: filteredListSelector(state),
  isLoading: isLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getTodoListDataAsync: () => dispatch(getTodoListData())
});

TodoList.propTypes = {
  list: PropTypes.array,
  isLoading: PropTypes.bool,
  getTodoListDataAsync: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


function useTodoListData() {
  const dispatch = useDispatch();
  const list = useSelector(filteredListSelector);
  const isLoading = useSelector(filteredListSelector);

  const getRequest = useCallback(() => {
    dispatch(getTodoListData())
  }, [dispatch]);

  return {
    data: list,
    getRequest,
    isLoading,
  }
}

function Component() {
  const { data, getRequest, isLoading } = useTodoListData();

  useEffect(() => {
    getRequest()
  }, []);

  return (
    <>
      {isLoading
        ? <div>Loading...</div>
        : data.map((item) => <div key={item.id}>{item.title}</div>)
      }
    </>
  )
}

export const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
