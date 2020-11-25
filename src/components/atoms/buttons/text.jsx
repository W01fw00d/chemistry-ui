import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const Component = ({ color, size, className, children, handleClick }) => (
  <Button
    className={className}
    variant="contained"
    color={color}
    size={size}
    component="span"
    disableElevation
    onClick={handleClick}
  >
    {children}
  </Button>
);

Component.defaultProps = {
  color: 'primary',
  size: 'medium',
  children: <>Click me!</>,
  className: '',
  handleClick: () => {},
};

Component.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Component;
