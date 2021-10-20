import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ListItem as Item } from '@material-ui/core';

const Component = ({ children, isSubheader, onClick }) => {
  const useStyles = makeStyles({
    item: {
      paddingLeft: '32px',
    },
  });
  const classes = useStyles();

  return (
    <Item
      button={!!onClick}
      className={isSubheader ? '' : classes.item}
      dense
      onClick={onClick || (() => {})}
      role={undefined}
    >
      {children}
    </Item>
  );
};

Component.defaultProps = {
  children: <></>,
  isSubheader: false,
  onClick: () => {},
};

Component.propTypes = {
  children: PropTypes.any,
  isSubheader: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Component;
