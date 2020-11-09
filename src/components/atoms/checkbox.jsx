import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as MaterialCheckbox } from '@material-ui/core';

const Checkbox = ({ id, value, handleChange }) => (
  <MaterialCheckbox id={id} checked={value} onChange={handleChange} />
);

Checkbox.defaultProps = {
  id: '',
  value: false,
  handleChange: () => {},
};

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default Checkbox;
