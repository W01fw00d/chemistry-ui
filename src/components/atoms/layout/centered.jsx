import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const Component = ({ children }) => {
  const useStyles = makeStyles({
    centered: {
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-25px',
      position: 'absolute',
      top: '50%',
    },
  });
  const classes = useStyles();

  return <div className={classes.centered}>{children}</div>;
};

Component.defaultProps = {
  children: <></>,
};

Component.propTypes = {
  children: PropTypes.node,
};

export default Component;
