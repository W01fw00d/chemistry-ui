import React from 'react';

import { makeStyles } from '@material-ui/core';

import IconButton from '../../atoms/buttons/icon';
import Footer from '../layout/footer';

const Component = ({ children, color, handleClick }) => {
  const useStyles = makeStyles((theme) => ({
    overlayed: {
      backgroundColor: theme.palette.secondary.main,
      float: 'right',
      margin: theme.spacing(4),
    },
  }));
  const classes = useStyles();

  return (
    <Footer>
      <IconButton className={classes.overlayed} color={color} onClick={handleClick}>
        {children}
      </IconButton>
    </Footer>
  );
};

Component.defaultProps = {
  children: <></>,
  color: 'primary',
  handleClick: () => {},
};

Component.propTypes = {
  children: IconButton.propTypes.children,
  color: IconButton.propTypes.color,
  handleClick: IconButton.propTypes.handleClick,
};

export default Component;
