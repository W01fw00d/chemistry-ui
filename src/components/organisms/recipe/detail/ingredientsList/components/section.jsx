import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  List,
  ListSubheader as Subheader,
} from '@material-ui/core';

const Component = ({
  sectionName,
  items,
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
    className={`${classes.root} ${className}`}
    subheader={(
      <Subheader
        component="div"
        className={`${classes.subheader}`}
      >
        {sectionName}
      </Subheader>
    )}
  >
    {items.map(renderItem)}
  </List>;
};

Component.defaultProps = {
  renderItem: () => { },
};

Component.propTypes = {
  sectionName: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
};

export default Component;
