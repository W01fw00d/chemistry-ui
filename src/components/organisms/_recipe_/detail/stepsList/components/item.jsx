import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../../../list/item/index';
import Checkbox from '../../../../list/item/checkbox';
import MarkdownText from '../../../../../atoms/markdownText';

const Component = ({ handleClick, index, item, rowCounter, value }) => (
  <Item onClick={handleClick}>
    <Checkbox text={<MarkdownText id={`${index}-${rowCounter}`} text={item} />} value={value} />
  </Item>
);

Component.defaultProps = {
  handleClick: () => {},
  index: 0,
};

Component.propTypes = {
  handleClick: Item.propTypes.onClick,
  index: PropTypes.number,
  item: MarkdownText.propTypes.text.isRequired,
  rowCounter: PropTypes.number.isRequired,
  value: Checkbox.propTypes.value.isRequired,
};

export default Component;
