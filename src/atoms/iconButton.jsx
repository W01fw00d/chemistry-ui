import React from 'react';
import PropTypes from 'prop-types';

import { IconButton as MaterialIconButton } from '@material-ui/core';

export default function IconButton({ color, className, children, handleClick }) {
  return (
    <MaterialIconButton color={color} className={className} onClick={handleClick}>
      {children}
    </MaterialIconButton>
  );
}

IconButton.defaultProps = {
  color: 'primary',
  className: '',
  children: <></>,
  handleClick: () => {},
};

IconButton.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};
