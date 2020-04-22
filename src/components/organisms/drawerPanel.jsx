import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import { Menu as MenuIcon } from '@material-ui/icons';

import IconButton from '../atoms/iconButton.jsx';

export default function DrawerPanel({ children }) {
  const [state, setState] = useState(false);

  const toggleDrawer = ({ type, key }) => {
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }

    setState(!state);
  };

  return (
    <>
      <IconButton handleClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer}>
        {children}
      </Drawer>
    </>
  );
}

DrawerPanel.defaultProps = {
  children: <></>,
};

DrawerPanel.propTypes = {
  children: PropTypes.node,
};
