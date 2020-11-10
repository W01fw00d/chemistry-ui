import React from 'react';
import PropTypes from 'prop-types';

import { Typography as MaterialTypography } from '@material-ui/core';

const Component = ({ children, variant, className }) =>
  <MaterialTypography
    variant={variant}
    color="inherit"
    className={className}
  >
    {children}
  </MaterialTypography>;

Component.defaultProps = {
  children: <></>,
  variant: '',
  className: '',
};

Component.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Component;
