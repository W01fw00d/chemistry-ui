import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

import { Menu as MenuIcon } from '@material-ui/icons';

import IconButton from '../../atoms/buttons/icon.jsx';

export default function DrawerPanel({ className, children }) {
  const useStyles = makeStyles(theme => ({
    layout: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const [state, setState] = useState(false);

  const toggleDrawer = ({ type, key }) => {
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }

    setState(!state);
  };

  return (
    <>
      <IconButton id="drawerButton" handleClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer}>
        <div className={`${classes.layout} ${className}`}>{children}</div>
      </Drawer>
    </>
  );
}

DrawerPanel.defaultProps = {
  className: '',
  children: <></>,
};

DrawerPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
