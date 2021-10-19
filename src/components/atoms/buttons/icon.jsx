import React from 'react';
import PropTypes from 'prop-types';

import { IconButton } from '@material-ui/core';

const Component = ({ children, className, color, handleClick, id }) => (
  <IconButton className={className} color={color} id={id} onClick={handleClick}>
    {children}
  </IconButton>
);

Component.defaultProps = {
  children: <></>,
  className: '',
  color: 'primary',
  handleClick: () => {},
  id: 'iconButton',
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
};

export default Component;
