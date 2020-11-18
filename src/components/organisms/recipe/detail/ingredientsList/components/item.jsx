import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

import IconButton from '../../../../../atoms/buttons/icon.jsx';
import Checkbox from '../../../../../atoms/fields/checkbox.jsx';

const Component = ({
  name,
  emoji,
  quantity,
  isOptional,
  alternatives,
  value,
  handleClick
}) => {
  let label = emoji ? `${emoji} (${name})` : name;
  label = quantity ? `${quantity} ${label}` : label;

  return <ListItem
    role={undefined}
    dense
    button
    onClick={handleClick}
  >
    <ListItemIcon>
      <Checkbox value={value} />
    </ListItemIcon>
    <ListItemText
      primary={isOptional ? `{${label}}` : `${label}`}
    />
    {alternatives && alternatives.length > 0 && (
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    )}
  </ListItem>;
};

Component.propTypes = {
  name: PropTypes.string,
  emoji: PropTypes.string,
  quantity: PropTypes.string,
  isOptional: PropTypes.bool,
  alternatives: PropTypes.array,
  value: PropTypes.bool,
  handleToggle: PropTypes.any,
};

export default Component;