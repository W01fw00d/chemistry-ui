import React from 'react';
import PropTypes from 'prop-types';

import { IconButton } from '@material-ui/core';

const Component = ({ id, color, className, children, handleClick }) => (
  <IconButton id={id} color={color} className={className} onClick={handleClick}>
    {children}
  </IconButton>
);

Component.defaultProps = {
  id: 'iconButton',
  color: 'primary',
  className: '',
  children: <></>,
  handleClick: () => {},
};

Component.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

export default Component;
