import React from 'react';
import PropTypes from 'prop-types';

import { IconButton as MaterialIconButton } from '@material-ui/core';

export default function IconButton({ id, color, className, children, handleClick }) {
  return (
    <MaterialIconButton id={id} color={color} className={className} onClick={handleClick}>
      {children}
    </MaterialIconButton>
  );
}

IconButton.defaultProps = {
  id: 'iconButton',
  color: 'primary',
  className: '',
  children: <></>,
  handleClick: () => {},
};

IconButton.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};
