import React from 'react';
import PropTypes from 'prop-types';

import { Typography as MaterialTypography } from '@material-ui/core';

const Component = ({ children, className, variant }) => (
  <MaterialTypography className={className} color="inherit" variant={variant}>
    {children}
  </MaterialTypography>
);

Component.defaultProps = {
  children: <></>,
  className: '',
  variant: '',
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Component;
