import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, List, ListItem as Item, ListSubheader as Subheader } from '@material-ui/core';

import Checkbox from '../../../../list/item/checkbox.jsx';

const Component = ({ sectionName, items, className, renderItem, value, handleClick }) => {
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

  return (
    sectionName ?
      <List
        className={`${classes.root} ${className}`}
        subheader={
          <Item role={undefined} dense button onClick={handleClick}>
            <Checkbox value={value} text={sectionName} />
          </Item>
        }
      >
        {items.map(renderItem)}
      </List > :
      <List className={`${classes.root} ${className}`}>
        {items.map(renderItem)}
      </List >
  );
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
