import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '@material-ui/core';

const Component = ({ handleChange, id, value }) => (
  <Checkbox checked={value} id={id} onChange={handleChange} />
);

Component.defaultProps = {
  handleChange: () => {},
  id: '',
  value: false,
};

Component.propTypes = {
  handleChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.bool,
};

export default Component;
