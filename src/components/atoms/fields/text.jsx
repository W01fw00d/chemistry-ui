import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, TextField } from '@material-ui/core';

const Component = ({ id, label, className, value, handleChange }) => {
  const useStyles = makeStyles(theme => ({
    field: {
      backgroundColor: theme.palette.primary.light,
    },
  }));
  const classes = useStyles();

  return (
    <TextField
      id={id}
      placeholder={label}
      className={`${classes.field} ${className}`}
      color="primary"
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};

Component.defaultProps = {
  id: 'textButton',
  label: '',
  className: '',
  value: '',
  handleChange: () => {},
};

Component.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Component;
