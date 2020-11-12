import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListSubheader,
} from '@material-ui/core';

const Component = ({
  sectionName,
  items,
  key,
  className,
  renderItem,
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      'margin-bottom': 0,
    },
    subheader: {
      color: '#A9A8AD',
      'font-size': 'medium',
    },
  }));
  const classes = useStyles();

  return <List
    key={`list-${key}`}
    className={`${classes.root} ${className}`}
    subheader={(
      <ListSubheader
        key={`subheader-${key}`}
        component="div"
        className={`${classes.subheader}`}
      >
        {sectionName}
      </ListSubheader>
    )}
  >
    {items.map(renderItem)}
  </List>;
};

Component.propTypes = {
  sectionName: PropTypes.string,
  items: PropTypes.array,
  key: PropTypes.number,
  className: PropTypes.string,
  renderItem: PropTypes.Function,
};

export default Component;
