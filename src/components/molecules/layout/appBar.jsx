import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar, Toolbar } from '@material-ui/core';

const Component = ({ children, className, position }) => {
  const useStyles = makeStyles((theme) => ({
    bar: {
      borderBottomColor: theme.palette.primary.light,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      boxShadow: 'none',
    },
    toolbar: {
      paddingLeft: '0',
      paddingRight: '0',
    },
  }));
  const classes = useStyles();

  return (
    <AppBar className={`${classes.bar} ${className}`} position={position}>
      <Toolbar className={classes.toolbar} variant="dense">
        {children}
      </Toolbar>
    </AppBar>
  );
};

Component.defaultProps = {
  children: <></>,
  className: '',
  position: '',
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.string,
};

export default Component;
