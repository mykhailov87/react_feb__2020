import * as PropTypes from 'prop-types';
import React from 'react';

export function MyOwnComponent(props) {
  const { children, name } = props;
  return (
    <div className="" style={{ backgroundColor: 'red' }}>
      Hello {name}
      <span>{children}</span>
    </div>
  );
}

MyOwnComponent.displayName = 'MyOwnComponent';

MyOwnComponent.propTypes = {
  anotherProps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
      sayHello: PropTypes.func,
    }),
  ),
  name: PropTypes.string,
};

MyOwnComponent.defaultProps = {
  name: 'Serhii',
};

export default MyOwnComponent;
