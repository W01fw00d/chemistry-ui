import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../atoms/typography.jsx';
import Checkbox from '../../atoms/fields/checkbox.jsx';

const Component = ({ id, value, handleChange, children }) => {
  const useStyles = makeStyles({
    label: {
      padding: '0 10px',
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Typography variant="body1">
        <Checkbox id={id} value={value} handleChange={handleChange} />
        <span className={classes.label}>{children}</span>
      </Typography>
    </div>
  );
};

Component.defaultProps = {
  id: '',
  value: false,
  handleChange: () => {},
  children: '',
};

Component.propTypes = {
  id: Checkbox.propTypes.id,
  value: Checkbox.propTypes.value,
  handleChange: Checkbox.propTypes.handleChange,
  children: PropTypes.string,
};

export default Component;
