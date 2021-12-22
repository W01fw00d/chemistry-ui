import React from 'react';
import { makeStyles } from '@material-ui/core';

export default () => {
  const useStyles = makeStyles({
    '@-webkit-keyframes spin': {
      '0%': { WebkitTransform: 'rotate(0deg)' },
      '100%': { WebkitTransform: 'rotate(360deg)' },
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    centered: {
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-25px',
      position: 'absolute',
      top: '50%',
    },
    loader: {
      animation: '$spin 2s linear infinite',
      border: '16px solid #f3f3f3',
      borderRadius: '50%',
      borderTop: '16px solid #3498db',
      height: '50px',
      WebkitAnimation: '$spin 2s linear infinite',
      width: '50px',
    },
    wrapper: {
      bottom: '0px',
      height: 'auto',
      left: 0,
      position: 'absolute',
      top: '0px',
      width: '100%',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.centered} ${classes.loader}`} />
    </div>
  );
};
