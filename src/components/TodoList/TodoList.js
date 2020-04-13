// Modules
import React, { useCallback, useEffect, useMemo } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { isImmutable } from 'immutable'
import { useTranslation, withTranslation } from 'react-i18next'
// Component
import Input from '../Input'
// Engine
import Api from '../../engine/services/api'
// Actions
import { getTodoListData } from '../../engine/core/todos/actions'
import { asyncActions } from '../../engine/core/todos/saga/asyncActions'
// Selectors
import { filteredListSelector, isLoadingSelector, isDoneSelector } from '../../engine/core/todos/selectors'

class TodoList extends React.Component {
  componentDidMount() {
    this.getTodoListDataAsync()
  }

  getTodoListDataAsync = () => {
    const { getTodoListDataAsync } = this.props;
    getTodoListDataAsync();
  };

  render() {
    const { list, isLoading, doneTodos } = this.props;
    return (
      <>
        <Input />
        {isLoading
          ? <div>Loading...</div>
          : doneTodos.map((item) => <div key={item.id}>{item.title}</div>)
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: filteredListSelector(state),
  doneTodos: isDoneSelector(state),
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

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


function useTodoListData() {
  const dispatch = useDispatch();
  const list = useSelector(filteredListSelector);
  const isLoading = useSelector(isLoadingSelector);

  const getRequest = useCallback(() => {
    dispatch(asyncActions.getTodoListDataAsync())
  }, [dispatch]);

  return useMemo(() => ({
    data: list,
    getRequest,
    isLoading,
  }), [list, getRequest, isLoading]);
}

function Component() {
  const { data, getRequest, isLoading } = useTodoListData();
  const { t, i18n } = useTranslation();

  const data_js = useMemo(() => {
    return isImmutable(data)
      ? data.toJS()
      : data;
  }, [data]);

  useEffect(() => {
    getRequest()
  }, []);

  console.log('%c Rendering...', 'background-color: black; color: yellow');

  const lang = i18n.language;

  const changeLanguage = useCallback((ev) => {
    const current = ev.target.value;
    i18n.changeLanguage(current)
  }, []);

  return (
    <>
      <div>
        <label>
          <input
            checked={lang === 'ua'}
            name="lang"
            onChange={changeLanguage}
            type="radio"
            value="ua"
          />
          ua
        </label>
        <label>
          <input
            checked={lang === 'en'}
            name="lang"
            onChange={changeLanguage}
            type="radio"
            value="en"
          />
          en
        </label>
        <label>
          <input
            checked={lang === 'ru'}
            name="lang"
            onChange={changeLanguage}
            type="radio"
            value="ru"
          />
          ru
        </label>
      </div>
      <h2>{t('My first todo app')}</h2>
      {isLoading
        ? <div>Loading...</div>
        : data.map((item) => <div key={item.get('id')}>{item.get('title')}</div>)
      }
    </>
  )
}

// export const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export default withTranslation()(Component)
