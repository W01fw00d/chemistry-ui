import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const Component = ({ children, id, to }) => (
  <RouterLink id={id} style={{ color: 'inherit', textDecoration: 'none' }} to={to}>
    {children}
  </RouterLink>
);

Component.defaultProps = {
  children: <></>,
  id: 'link',
  to: '/',
};

Component.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  to: PropTypes.string,
};

export default Component;
