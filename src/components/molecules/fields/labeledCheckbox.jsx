import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../atoms/typography.jsx';
import Checkbox from '../../atoms/fields/checkbox.jsx';

export default function LabeledCheckbox({ id, value, handleChange, children }) {
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
}

LabeledCheckbox.defaultProps = {
  id: '',
  value: false,
  handleChange: () => {},
  children: '',
};

LabeledCheckbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.bool,
  handleChange: PropTypes.func,
  children: PropTypes.string,
};
