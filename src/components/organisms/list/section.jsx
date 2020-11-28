import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, List, ListItem as Item, ListItemText as Text, Collapse } from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const Component = ({ sectionName, description, items, className, renderItem, value, handleClick }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      'margin-bottom': 0,
    },
    icon: {
      color: theme.palette.primary.dark,
    },
    item: {
      paddingLeft: '32px',
    },
  }));
  const classes = useStyles();

  const hasExpandAction = !!items || !!description;

  const renderExpandIcon = () => !value ?
    <ExpandLess className={classes.icon} /> :
    <ExpandMore className={classes.icon} />

  return (
    sectionName ?
      <List
        className={`${classes.root} ${className}`}
        subheader={
          <Item role={undefined} dense button onClick={hasExpandAction ? handleClick : () => { }}>
            <Text primary={sectionName} />
            {hasExpandAction && renderExpandIcon()}
          </Item>
        }
      >
        {description &&
          <Collapse in={!value} timeout="auto" unmountOnExit>
            <Item role={undefined} dense className={classes.item}>
              <Text primary={description} />
            </Item>
          </Collapse>
        }
        {items &&
          <Collapse in={!value} timeout="auto" unmountOnExit>
            {items.map(renderItem)}
          </Collapse>
        }
      </List > :
      <List className={`${classes.root} ${className}`}>
        {description &&
          <Item role={undefined} dense>
            <Text primary={description} />
          </Item>
        }
        {items && items.map(renderItem)}
      </List >
  );
};

Component.defaultProps = {
  renderItem: () => { },
  handleClick: () => { },
};

Component.propTypes = {
  sectionName: PropTypes.any,
  description: PropTypes.any,
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
  value: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Component;
