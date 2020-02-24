// Core
import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Header.css';

function Header(props) {
  const { children } = props;
  return (
    <header>{children}</header>
  );
}

// TODO: https://ru.reactjs.org/docs/static-type-checking.html
Header.displayName = 'Header';

Header.propTypes = {
  children: PropTypes.string,
};

Header.defaultProps = {
  children: 'My custom header',
};

export default Header;
