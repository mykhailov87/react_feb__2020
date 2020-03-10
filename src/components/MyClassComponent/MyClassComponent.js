// Core
import React, { Component, PureComponent } from 'react';

class MyClassComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      inputValue: '',
      name: 'Serhii',
    };

    // this.onInputChange = this.onInputChange.bind(this);
  }

  static propTypes = {};

  static defaultProps = {};

  static displayName = 'MyClassComponent';

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps()', state);
    // return {
    //   inputValue: 'Ololo',
    // };
  }

  static getDerivedStateFromError(error) {
    // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
    return { hasError: true };
  }

  componentDidMount() {
    // Вызывается один раз!
  }

  componentDidCatch(error) {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.id !== prevProps.id) {
      // отправить запрос на сервер
    }
    if (prevState.inputValue !== this.state.inputValue) {
      // console.log('prevState.inputValue ', prevState.inputValue);
    }
    console.log('snapshot ', snapshot);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // TODO: read that https://ru.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    return 'ololo';
  }

  componentWillUnmount() {
    // Вызывается при удалении из DOM'a
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  onInputChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
    // this.setState(prevState => ({ name: prevState.inputValue }));

    // this.setState({ inputValue: ev.target.value }, () => {
    //   console.log('Done');
    // });

    // this.forceUpdate();
  };

  render() {
    const { hasError, name, inputValue } = this.state;
    if (hasError) {
      return <h1>Error!!!</h1>
    }
    return (
      <div>
        {this.props.children}
        <span>{name}</span>
        <input
          onChange={this.onInputChange}
          placeholder="Search"
          value={inputValue}
        />
      </div>
    );
  }
}

export default MyClassComponent;
