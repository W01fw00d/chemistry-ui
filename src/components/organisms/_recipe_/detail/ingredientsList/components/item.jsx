import React from 'react';
import PropTypes from 'prop-types';

import { ListItemSecondaryAction as Action } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import IconButton from '../../../../../atoms/buttons/icon';
import Item from '../../../../list/item/index';
import Checkbox from '../../../../list/item/checkbox';

const Component = ({
  alternatives,
  currentNameIndex,
  emoji,
  handleClick,
  isOptional,
  name,
  quantity,
  setCurrentNameIndex,
  value,
}) => {
  const names = [
    name,
    ...(alternatives ? alternatives.map((alternative) => alternative.name) : []),
  ];
  const currentName = names[currentNameIndex];

  let label = emoji ? `${emoji} (${currentName})` : currentName;
  label = quantity ? `${quantity} ${label}` : label;

  const iterateNames = () => {
    setCurrentNameIndex(currentNameIndex === names.length - 1 ? 0 : currentNameIndex + 1);
  };

  return (
    <Item onClick={handleClick}>
      <Checkbox text={isOptional ? `{${label}}` : `${label}`} value={value} />
      {alternatives && alternatives.length > 0 && (
        <Action>
          <IconButton aria-label="comments" edge="end" handleClick={iterateNames}>
            <AutorenewIcon />
          </IconButton>
        </Action>
      )}
    </Item>
  );
};

Component.defaultProps = {
  alternatives: null,
  currentNameIndex: 0,
  emoji: '',
  handleClick: () => {},
  isOptional: false,
  name: '',
  quantity: '',
  setCurrentNameIndex: () => {},
  value: false,
};

Component.propTypes = {
  alternatives: PropTypes.array,
  currentNameIndex: PropTypes.number,
  emoji: PropTypes.string,
  handleClick: PropTypes.func,
  isOptional: PropTypes.bool,
  name: PropTypes.string,
  quantity: PropTypes.string,
  setCurrentNameIndex: PropTypes.func,
  value: Checkbox.propTypes.value,
};

export default Component;
