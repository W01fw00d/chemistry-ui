import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as MaterialCheckbox } from '@material-ui/core';

const Checkbox = ({ id, value, handleChange }) => (
  <MaterialCheckbox id={id} checked={value} onChange={handleChange} />
);

Checkbox.defaultProps = {
  id: '',
  value: '',
  handleChange: () => {},
};

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Checkbox;
