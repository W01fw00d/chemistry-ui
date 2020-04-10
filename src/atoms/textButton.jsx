import React from 'react';
import PropTypes from 'prop-types';

import { Button as MaterialButton } from '@material-ui/core';

export default function TextButton({ color, size, className, children, handleClick }) {
  return (
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
    </MaterialButton>
  );
}

TextButton.defaultProps = {
  color: 'primary',
  size: 'medium',
  children: <>Click me!</>,
  className: '',
  handleClick: () => {},
};

TextButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};
