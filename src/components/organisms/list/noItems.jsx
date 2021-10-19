import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../atoms/typography.jsx';

const Component = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    message: {
      color: theme.palette.primary.dark,
      paddingBottom: '20px',
      textAlign: 'center',
    },
  }));
  const classes = useStyles();

  return (
    <Typography className={classes.message} variant="body1">
      {children}
    </Typography>
  );
};

Component.defaultProps = {
  children: '',
};

Component.propTypes = {
  children: PropTypes.string,
};

export default Component;
