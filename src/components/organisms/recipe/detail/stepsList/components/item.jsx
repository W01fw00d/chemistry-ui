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

Component.defaultProps = {
  index: 0,
  handleClick: () => {},
};

Component.propTypes = {
  index: PropTypes.number,
  rowCounter: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
};

export default Component;
