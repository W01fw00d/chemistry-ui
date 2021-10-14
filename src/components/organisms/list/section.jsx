import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, List, ListItemText as Text, Collapse } from '@material-ui/core';

import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

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
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginBottom: 0,
    },
    icon: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  const hasExpandAction = !!items || !!description;

  const renderExpandIcon = () =>
    !value ? (
      <ExpandLessIcon className={classes.icon} />
    ) : (
      <ExpandMoreIcon className={classes.icon} />
    );

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
  sectionName: null,
  description: null,
  items: [],
  value: true,
  className: '',
  renderItem: () => {},
  handleClick: () => {},
};

Component.propTypes = {
  sectionName: PropTypes.any, // TODO: can be MarkdownText or string
  description: PropTypes.any, // TODO: can be MarkdownText or string
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
  value: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Component;
