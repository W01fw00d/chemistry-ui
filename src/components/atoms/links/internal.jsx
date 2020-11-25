import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const Component = ({ id, to, children }) => (
  <RouterLink id={id} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
    {children}
  </RouterLink>
);

Component.defaultProps = {
  id: 'link',
  to: '/',
  children: <></>,
};

Component.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};

export default Component;
