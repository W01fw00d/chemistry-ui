import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import IconButton from '../../atoms/buttons/icon.jsx';
import Footer from '../layout/footer.jsx';

const Component = ({ color, children, handleClick }) => {
  const useStyles = makeStyles((theme) => ({
    overlayed: {
      float: 'right',
      margin: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  return (
    <Footer>
      <IconButton color={color} className={classes.overlayed} onClick={handleClick}>
        {children}
      </IconButton>
    </Footer>
  );
};

Component.defaultProps = {
  color: 'primary',
  children: <></>,
  handleClick: () => {},
};

Component.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

export default Component;
