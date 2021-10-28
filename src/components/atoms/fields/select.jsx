import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, Select, MenuItem, makeStyles } from '@material-ui/core';

const Component = ({ handleChange, id, options, value }) => {
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
        id={id}
        className={classes.field}
        color="primary"
        labelId="language-select"
        onChange={handleChange}
        value={value}
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Component.defaultProps = {
  handleChange: () => {},
  id: 'select',
  options: [],
  value: 0,
};

Component.propTypes = {
  handleChange: PropTypes.func,
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  value: PropTypes.number,
};

export default Component;
