import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

export default function Footer({ children, className }) {
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

Footer.defaultProps = {
  children: <></>,
  className: '',
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
