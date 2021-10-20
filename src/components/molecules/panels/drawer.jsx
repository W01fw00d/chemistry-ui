import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

import { Menu as MenuIcon } from '@material-ui/icons';

import IconButton from '../../atoms/buttons/icon';

const Component = ({ children, className }) => {
  const useStyles = makeStyles((theme) => ({
    layout: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const [state, setState] = useState(false);

  const toggleDrawer = ({ key, type }) => {
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }

    setState(!state);
  };

  return (
    <>
      <IconButton handleClick={toggleDrawer} id="drawerButton">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" onClose={toggleDrawer} open={state}>
        <div className={`${classes.layout}${className ? ` ${className}` : ''}`}>{children}</div>
      </Drawer>
    </>
  );
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
