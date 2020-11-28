import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, List, ListItemText as Text, Collapse } from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Item from './item/index.jsx';

const Component = ({
  sectionName,
  description,
  items,
  className,
  renderItem,
  value,
  handleClick,
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      'margin-bottom': 0,
    },
    icon: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  const hasExpandAction = !!items || !!description;

  const renderExpandIcon = () =>
    !value ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />;

  return sectionName ? (
    <List
      className={`${classes.root} ${className}`}
      subheader={
        <Item isSubheader onClick={hasExpandAction ? handleClick : undefined}>
          <Text primary={sectionName} />
          {hasExpandAction && renderExpandIcon()}
        </Item>
      }
    >
      {description && (
        <Collapse in={!value} timeout="auto" unmountOnExit>
          <Item>
            <Text primary={description} />
          </Item>
        </Collapse>
      )}
      {items && (
        <Collapse in={!value} timeout="auto" unmountOnExit>
          {items.map(renderItem)}
        </Collapse>
      )}
    </List>
  ) : (
    <List className={`${classes.root} ${className}`}>
      {description && (
        <Item>
          <Text primary={description} />
        </Item>
      )}
      {items && items.map(renderItem)}
    </List>
  );
};

Component.defaultProps = {
  renderItem: () => {},
  handleClick: () => {},
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
