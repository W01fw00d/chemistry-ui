import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem as Item,
  ListItemIcon as Icon,
  ListItemText as Text,
  ListItemSecondaryAction as Action,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

import IconButton from '../../../../../atoms/buttons/icon.jsx';
import Checkbox from '../../../../../atoms/fields/checkbox.jsx';

const Component = ({ name, emoji, quantity, isOptional, alternatives, value, handleClick }) => {
  let label = emoji ? `${emoji} (${name})` : name;
  label = quantity ? `${quantity} ${label}` : label;

  return (
    <Item role={undefined} dense button onClick={handleClick}>
      <Icon>
        <Checkbox value={value} />
      </Icon>
      <Text primary={isOptional ? `{${label}}` : `${label}`} />
      {alternatives && alternatives.length > 0 && (
        <Action>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </Action>
      )}
    </Item>
  );
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
