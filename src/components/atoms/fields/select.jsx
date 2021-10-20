import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, Select, MenuItem, makeStyles } from '@material-ui/core';

const Component = ({ handleChange, options, value }) => {
  const useStyles = makeStyles((theme) => ({
    field: {
      backgroundColor: theme.palette.primary.light,
      paddingLeft: '7px',
    },
  }));
  const classes = useStyles();

  return (
    <FormControl>
      <Select
        className={classes.field}
        color="primary"
        labelId="language-select"
        onChange={handleChange}
        value={value}
        variant="outlined"
      >
        {options.map(({ id, text }) => (
          <MenuItem key={id} value={id}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Component.defaultProps = {
  handleChange: () => {},
  options: [],
  value: 0,
};

Component.propTypes = {
  handleChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  value: PropTypes.number,
};

export default Component;
