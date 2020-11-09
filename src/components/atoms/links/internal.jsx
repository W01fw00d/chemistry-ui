import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export default function InternalLink({ id, to, children }) {
  return (
    <RouterLink id={id} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </RouterLink>
  );
}

InternalLink.defaultProps = {
  id: 'link',
  to: '/',
  children: <></>,
};

InternalLink.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};
