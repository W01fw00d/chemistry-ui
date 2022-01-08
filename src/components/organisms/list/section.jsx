import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, List, ListItemText as Text, Collapse } from '@material-ui/core';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import Item from './item/index';
import Description from './item/description';

const Component = ({
  className,
  description,
  handleClick,
  items,
  renderItem,
  sectionName,
  value,
}) => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      color: theme.palette.primary.dark,
    },
    root: {
      marginBottom: 0,
      width: '100%',
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
          <Description>
            <Text primary={description} />
          </Description>
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
        <Description>
          <Text primary={description} />
        </Description>
      )}
      {items && items.map(renderItem)}
    </List>
  );
};

Component.defaultProps = {
  className: '',
  description: null,
  handleClick: () => {},
  items: [],
  renderItem: () => {},
  sectionName: null,
  value: true,
};

Component.propTypes = {
  className: PropTypes.string,
  description: PropTypes.instanceOf(Object),
  handleClick: PropTypes.func,
  items: PropTypes.array,
  renderItem: PropTypes.any,
  sectionName: PropTypes.any, // TODO: Issue #55 can be MarkdownText or string
  value: PropTypes.bool,
};

export default Component;
