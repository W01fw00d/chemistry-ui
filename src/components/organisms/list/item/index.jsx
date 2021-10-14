import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ListItem as Item } from '@material-ui/core';

const Component = ({ children, onClick, isSubheader }) => {
  const useStyles = makeStyles({
    item: {
      paddingLeft: '32px',
    },
  });
  const classes = useStyles();

  return (
    <Item
      role={undefined}
      dense
      button={!!onClick}
      onClick={onClick || (() => {})}
      className={isSubheader ? '' : classes.item}
    >
      {children}
    </Item>
  );
};

Component.defaultProps = {
  children: <></>,
  onClick: () => {},
  isSubheader: false,
};

Component.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  isSubheader: PropTypes.bool,
};

export default Component;
