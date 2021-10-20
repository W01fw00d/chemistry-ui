import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../atoms/typography';
import Checkbox from '../../atoms/fields/checkbox';

const Component = ({ children, handleChange, id, value }) => {
  const useStyles = makeStyles({
    label: {
      padding: '0 10px',
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Typography variant="body1">
        <Checkbox handleChange={handleChange} id={id} value={value} />
        <span className={classes.label}>{children}</span>
      </Typography>
    </div>
  );
};

Component.defaultProps = {
  children: '',
  handleChange: () => {},
  id: '',
  value: false,
};

Component.propTypes = {
  children: PropTypes.string,
  handleChange: Checkbox.propTypes.handleChange,
  id: Checkbox.propTypes.id,
  value: Checkbox.propTypes.value,
};

export default Component;
