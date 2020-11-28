import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ListItem as Item } from '@material-ui/core';

const Component = ({ children, onClick }) => {
  const useStyles = makeStyles({
    item: {
      paddingLeft: '32px',
    },
  });
  const classes = useStyles();

  return <Item role={undefined} dense button onClick={onClick} className={classes.item}>
    {children}
  </Item>;
};

Component.defaultProps = {
  onClick: () => { },
};

Component.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Component;
