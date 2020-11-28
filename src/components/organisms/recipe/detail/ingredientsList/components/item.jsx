import React from 'react';
import PropTypes from 'prop-types';

import { ListItemSecondaryAction as Action } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

import IconButton from '../../../../../atoms/buttons/icon.jsx';
import Item from '../../../../list/item/index.jsx';
import Checkbox from '../../../../list/item/checkbox.jsx';

const Component = ({ name, emoji, quantity, isOptional, alternatives, value, handleClick }) => {
  let label = emoji ? `${emoji} (${name})` : name;
  label = quantity ? `${quantity} ${label}` : label;

  return (
    <Item onClick={handleClick}>
      <Checkbox value={value} text={isOptional ? `{${label}}` : `${label}`} />
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
