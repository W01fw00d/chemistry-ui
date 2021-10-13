import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../../../list/section.jsx';

const Component = ({ sectionName, items, className, renderItem, value, handleClick }) => (
  <Section
    sectionName={sectionName}
    items={items}
    className={className}
    renderItem={renderItem}
    value={value}
    handleClick={handleClick}
  />
);

Component.defaultProps = {
  sectionName: '',
  items: [],
  className: '',
  value: true,
  renderItem: () => {},
  handleClick: () => {},
};

Component.propTypes = {
  sectionName: Section.propTypes.sectionName,
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
  value: Section.propTypes.value,
  handleClick: PropTypes.func,
};

export default Component;
