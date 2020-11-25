import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar, Toolbar } from '@material-ui/core';

const Component = ({ children, position, className }) => {
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
    <AppBar position={position} className={`${classes.bar} ${className}`}>
      <Toolbar variant="dense" className={classes.toolbar}>
        {children}
      </Toolbar>
    </AppBar>
  );
};

Component.defaultProps = {
  children: <></>,
  position: '',
  className: '',
};

Component.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  className: PropTypes.string,
};

export default Component;
