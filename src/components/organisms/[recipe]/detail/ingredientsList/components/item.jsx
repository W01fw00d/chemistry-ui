import React from 'react';
import PropTypes from 'prop-types';

import { ListItemSecondaryAction as Action } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import IconButton from '../../../../../atoms/buttons/icon.jsx';
import Item from '../../../../list/item/index.jsx';
import Checkbox from '../../../../list/item/checkbox.jsx';

const Component = ({
  name,
  emoji,
  quantity,
  isOptional,
  alternatives,
  value,
  handleClick,
  currentNameIndex,
  setCurrentNameIndex,
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
      <Checkbox value={value} text={isOptional ? `{${label}}` : `${label}`} />
      {alternatives && alternatives.length > 0 && (
        <Action>
          <IconButton edge="end" aria-label="comments" handleClick={iterateNames}>
            <AutorenewIcon />
          </IconButton>
        </Action>
      )}
    </Item>
  );
};

Component.defaultProps = {
  name: '',
  emoji: '',
  quantity: '',
  isOptional: false,
  alternatives: null,
  value: false,
  handleClick: () => {},
  currentNameIndex: 0,
  setCurrentNameIndex: () => {},
};

Component.propTypes = {
  name: PropTypes.string,
  emoji: PropTypes.string,
  quantity: PropTypes.string,
  isOptional: PropTypes.bool,
  alternatives: PropTypes.array,
  value: PropTypes.bool,
  handleClick: PropTypes.func,
  currentNameIndex: PropTypes.number,
  setCurrentNameIndex: PropTypes.func,
};

export default Component;
