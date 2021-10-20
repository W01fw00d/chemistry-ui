import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ children, className }) => {
  const useStyles = makeStyles({
    bar: {
      bottom: 0,
      left: 0,
      position: 'fixed',
      right: 0,
    },
  });
  const classes = useStyles();

  return <footer className={`${classes.bar} ${className}`}>{children}</footer>;
};

Component.defaultProps = {
  children: <></>,
  className: '',
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Component;
