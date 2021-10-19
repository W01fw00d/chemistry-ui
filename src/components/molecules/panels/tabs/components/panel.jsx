import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ children, index, value, ...other }) => (
  <div
    aria-labelledby={`simple-tab-${index}`}
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    role="tabpanel"
    {...other}
  >
    {children}
  </div>
);

Component.defaultProps = {
  children: <></>,
  index: 0,
  value: 0,
};

Component.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number,
  value: PropTypes.number,
};

export default Component;
