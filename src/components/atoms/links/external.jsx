import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

export default function ExternalLink({ id, to, className, children }) {
  const useStyles = makeStyles({
    text: {
      textDecoration: 'none',
      color: 'inherit',
    },
  });
  const classes = useStyles();

  return (
    <a
      id={id}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes.text} ${className}`}
    >
      {children}
    </a>
  );
}

ExternalLink.defaultProps = {
  id: 'externalLink',
  to: '/',
  className: '',
  children: <></>,
};

ExternalLink.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
