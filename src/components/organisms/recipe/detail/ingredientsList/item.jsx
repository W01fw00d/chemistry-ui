import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

import IconButton from '../../../../atoms/buttons/icon.jsx';
import Checkbox from '../../../../atoms/fields/checkbox.jsx';

const Component = ({
  code,
  name,
  emoji,
  quantity,
  isOptional,
  alternatives,
  key,
  rowCounter,
  checked,
  handleToggle
}) => {
  let label = emoji ? `${emoji} (${name})` : name;
  label = quantity ? `${quantity} ${label}` : label;

  return <ListItem
    id={`${code}-${key}-${rowCounter}`}
    key={`${code}-${key}-${rowCounter}`}
    role={undefined}
    dense
    button
    onClick={handleToggle(rowCounter)}
  >
    <ListItemIcon>
      <Checkbox value={checked.indexOf(rowCounter) !== -1} />
    </ListItemIcon>
    <ListItemText
      id={`checkbox-list-label-${code}`}
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
  code: PropTypes.string,
  name: PropTypes.string,
  emoji: PropTypes.string,
  quantity: PropTypes.string,
  isOptional: PropTypes.boolean,
  alternatives: PropTypes.array,
  key: PropTypes.number,
  rowCounter: PropTypes.number,
  checked: PropTypes.array,
  handleToggle: PropTypes.Function,
};

export default Component;
