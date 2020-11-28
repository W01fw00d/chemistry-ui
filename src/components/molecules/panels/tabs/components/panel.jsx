import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Box } from '@material-ui/core';

const Component = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

Component.defaultProps = {
  tabsData: [],
  value: 0,
  index: 0,
};

Component.propTypes = {
  children: PropTypes.any,
  value: PropTypes.number,
  index: PropTypes.number,
};

export default Component;
