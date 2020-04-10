import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar as MaterialAppBar, Toolbar } from '@material-ui/core';

export default function AppBar({ children, position, className }) {
  const useStyles = makeStyles(theme => ({
    bar: {
      boxShadow: 'none',
      borderBottomWidth: '1px',
      borderBottomColor: theme.palette.primary.light,
      borderBottomStyle: 'solid',
    },
    toolbar: {
      paddingLeft: '0',
      paddingRight: '0',
    },
  }));
  const classes = useStyles();

  return (
    <MaterialAppBar position={position} className={`${classes.bar} ${className}`}>
      <Toolbar variant="dense" className={classes.toolbar}>
        {children}
      </Toolbar>
    </MaterialAppBar>
  );
}

AppBar.defaultProps = {
  children: <></>,
  position: '',
  className: '',
};

AppBar.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  className: PropTypes.string,
};
