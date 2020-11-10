import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ children, className }) => {
  const useStyles = makeStyles({
    bar: {
      left: 0,
      right: 0,
      bottom: 0,
      position: 'fixed',
    },
  });
  const classes = useStyles();

  return <footer className={`${classes.bar} ${className}`}>{children}</footer>;
}

Component.defaultProps = {
  children: <></>,
  className: '',
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Component;
