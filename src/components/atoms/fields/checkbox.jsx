import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '@material-ui/core';

const Component = ({ id, value, handleChange }) => (
  <Checkbox id={id} checked={value} onChange={handleChange} />
);

Component.defaultProps = {
  id: '',
  value: false,
  handleChange: () => { },
};

Component.propTypes = {
  id: PropTypes.string,
  value: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default Component;
