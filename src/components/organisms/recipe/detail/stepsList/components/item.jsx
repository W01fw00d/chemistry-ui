import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../../../list/item/index.jsx';
import Checkbox from '../../../../list/item/checkbox.jsx';
import MarkdownText from '../../../../../atoms/markdownText.jsx';

const Component = ({ index, rowCounter, item, value, handleClick }) => (
  <Item onClick={handleClick}>
    <Checkbox value={value} text={<MarkdownText id={`${index}-${rowCounter}`} text={item} />} />
  </Item>
);

Component.propTypes = {
  index: PropTypes.number,
  rowCounter: PropTypes.number,
  item: PropTypes.string,
  value: PropTypes.bool,
  handleToggle: PropTypes.any,
};

export default Component;
