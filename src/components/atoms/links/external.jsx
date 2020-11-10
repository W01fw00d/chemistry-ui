import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ id, to, className, children }) => {
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

Component.defaultProps = {
  id: 'externalLink',
  to: '/',
  className: '',
  children: <></>,
};

Component.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Component;
