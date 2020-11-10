import React from 'react';
import PropTypes from 'prop-types';

import { Button as MaterialButton } from '@material-ui/core';

const Component = ({ color, size, className, children, handleClick }) =>
  <MaterialButton
    className={className}
    variant="contained"
    color={color}
    size={size}
    component="span"
    disableElevation
    onClick={handleClick}
  >
    {children}
  </MaterialButton>;

Component.defaultProps = {
  color: 'primary',
  size: 'medium',
  children: <>Click me!</>,
  className: '',
  handleClick: () => { },
};

Component.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Component;
