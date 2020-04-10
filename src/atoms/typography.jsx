import React from 'react';
import PropTypes from 'prop-types';

import { Typography as MaterialTypography } from '@material-ui/core';

export default function Typography({ children, variant, className }) {
  return (
    <MaterialTypography variant={variant} color="inherit" className={className}>
      {children}
    </MaterialTypography>
  );
}

Typography.defaultProps = {
  children: <></>,
  variant: '',
  className: '',
};

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
};
