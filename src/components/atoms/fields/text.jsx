import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, TextField } from '@material-ui/core';

const Component = ({ className, handleChange, id, label, value }) => {
  const useStyles = makeStyles((theme) => ({
    field: {
      backgroundColor: theme.palette.primary.light,
    },
  }));
  const classes = useStyles();

  return (
    <TextField
      className={`${classes.field} ${className}`}
      color="primary"
      id={id}
      onChange={handleChange}
      placeholder={label}
      value={value}
      variant="outlined"
    />
  );
};

Component.defaultProps = {
  className: '',
  handleChange: () => {},
  id: 'textButton',
  label: '',
  value: '',
};

Component.propTypes = {
  className: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Component;
