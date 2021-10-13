import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../atoms/typography.jsx';

const Component = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    message: {
      color: theme.palette.primary.dark,
      textAlign: 'center',
      paddingBottom: '20px',
    },
  }));
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.message}>
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
