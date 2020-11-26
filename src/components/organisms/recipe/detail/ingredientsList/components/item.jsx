import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ListItem as Item, ListItemSecondaryAction as Action } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

import IconButton from '../../../../../atoms/buttons/icon.jsx';
import Checkbox from '../../../../list/item/checkbox.jsx';

const Component = ({ name, emoji, quantity, isOptional, alternatives, value, handleClick }) => {
  const useStyles = makeStyles({
    item: {
      paddingLeft: '64px',
    },
  });
  const classes = useStyles();

  let label = emoji ? `${emoji} (${name})` : name;
  label = quantity ? `${quantity} ${label}` : label;

  return (
    <Item role={undefined} dense button onClick={handleClick} className={classes.item}>
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
