// Core
import React, { Component } from 'react';

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'footer',
  //   };
  // }

  static displayName = 'Footer';

  static propTypes = {};

  static defaultProps = {};

  state = {
    name: 'footer',
    ololo: '',
  };

  componentDidMount() {
    console.log('this.componentDidMount()');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // this.props;
    // this.state;

    if (this.state.name !== prevState.name) {
      // TODO: /////
      this.setState({ name: '' });
    }
  }

  componentWillUnmount() {
    // убрать все подписки
  }

  render() {
    const { name } = this.state;
    return (
      <footer>My custom {name}</footer>
    );
  }
}

export default Footer;
