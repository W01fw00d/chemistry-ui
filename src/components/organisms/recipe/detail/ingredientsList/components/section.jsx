import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, List, ListItem as Item, ListItemText as Text, Collapse } from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
    icon: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  return (
    sectionName ?
      <List
        className={`${classes.root} ${className}`}
        subheader={
          <Item role={undefined} dense button onClick={handleClick}>
            <Text primary={sectionName} />
            {!value ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
          </Item>
        }
      >
        <Collapse in={!value} timeout="auto" unmountOnExit>
          {items.map(renderItem)}
        </Collapse>
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
