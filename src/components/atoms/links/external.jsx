import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ children, className, id, to }) => {
  const useStyles = makeStyles({
    text: {
      color: 'inherit',
      textDecoration: 'none',
    },
  });
  const classes = useStyles();

  return (
    <a
      className={`${classes.text}${className ? ` ${className}` : ''}`}
      href={to}
      id={id}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

Component.defaultProps = {
  children: <></>,
  className: '',
  id: 'externalLink',
  to: '/',
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  to: PropTypes.string,
};

export default Component;
