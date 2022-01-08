import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ListItem as Item } from '@material-ui/core';

const Component = ({ children }) => {
  const useStyles = makeStyles({
    item: {
      paddingLeft: '32px',
    },
  });
  const classes = useStyles();

  return (
    <Item className={classes.item} dense role={undefined}>
      {children}
    </Item>
  );
};

Component.defaultProps = {
  children: <></>,
};

Component.propTypes = {
  children: PropTypes.any,
};

export default Component;
