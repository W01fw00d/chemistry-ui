import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import Checkbox from '../../../../../atoms/fields/checkbox.jsx';
import MarkdownText from '../../../../../atoms/markdownText.jsx';

const Component = ({
  index,
  rowCounter,
  step,
  value,
  handleClick
}) =>
  <ListItem
    role={undefined}
    dense
    button
    onClick={handleClick}
  >
    <ListItemIcon>
      <Checkbox value={value} />
    </ListItemIcon>
    <ListItemText
      primary={<MarkdownText id={`${index}-${rowCounter}`} text={step} />}
    />
  </ListItem>;

Component.propTypes = {
  index: PropTypes.number,
  rowCounter: PropTypes.number,
  step: PropTypes.string,
  value: PropTypes.bool,
  handleToggle: PropTypes.any,
};

export default Component;
