import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const Component = ({ children, className, color, handleClick, size }) => (
  <Button
    className={className}
    color={color}
    component="span"
    disableElevation
    onClick={handleClick}
    size={size}
    variant="contained"
  >
    {children}
  </Button>
);

Component.defaultProps = {
  children: <>Click me!</>,
  className: '',
  color: 'primary',
  handleClick: () => {},
  size: 'medium',
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  size: PropTypes.string,
};

export default Component;
