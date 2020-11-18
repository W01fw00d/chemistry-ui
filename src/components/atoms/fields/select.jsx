import React from 'react';
import PropTypes from 'prop-types';

import {
  FormControl,
  Select,
  MenuItem,
  makeStyles
} from '@material-ui/core';

const Component = ({ value, options, handleChange }) => {
  const useStyles = makeStyles(theme => ({
    field: {
      backgroundColor: theme.palette.primary.light,
      paddingLeft: '7px',
    },
  }));
  const classes = useStyles();

  return (
    <FormControl>
      <Select
        labelId="language-select"
        className={classes.field}
        color="primary"
        variant="outlined"
        value={value}
        onChange={handleChange}
      >
        {options.map(({ id, text }) => (
          <MenuItem key={id} value={id}>{text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Component.defaultProps = {
  label: '',
  value: 0,
  options: [],
  handleChange: () => { },
};

Component.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

export default Component;
