import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, TextField as MaterialTextField } from '@material-ui/core';

export default function TextField({ id, label, className, value, handleChange }) {
  const useStyles = makeStyles(theme => ({
    field: {
      backgroundColor: theme.palette.primary.light,
    },
  }));
  const classes = useStyles();

  return (
    <MaterialTextField
      id={id}
      placeholder={label}
      className={`${classes.field} ${className}`}
      color="primary"
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
}

TextField.defaultProps = {
  id: 'textButton',
  label: '',
  className: '',
  value: '',
  handleChange: () => {},
};

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
