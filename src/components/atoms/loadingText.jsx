import React from 'react';
import { makeStyles } from '@material-ui/core';

export default () => {
  const useStyles = makeStyles({
    text: {
      alignItems: 'center',
      display: 'flex',
      fontWeight: 'bold',
      height: '50px',
      justifyContent: 'center',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-25px',
      position: 'absolute',
      top: '50%',
      width: '100px',
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
      <span className={classes.text}>Loading...</span>
    </div>
  );
};
