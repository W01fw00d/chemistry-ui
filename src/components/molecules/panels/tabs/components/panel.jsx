import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {children}
  </div>
);

Component.defaultProps = {
  children: <></>,
  value: 0,
  index: 0,
};

Component.propTypes = {
  children: PropTypes.any,
  value: PropTypes.number,
  index: PropTypes.number,
};

export default Component;
