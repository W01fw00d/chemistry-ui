import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../../../list/section.jsx';

const Component = ({ className, handleClick, items, renderItem, sectionName, value }) => (
  <Section
    className={className}
    handleClick={handleClick}
    items={items}
    renderItem={renderItem}
    sectionName={sectionName}
    value={value}
  />
);

Component.defaultProps = {
  className: '',
  handleClick: () => {},
  items: [],
  renderItem: () => {},
  sectionName: '',
  value: true,
};

Component.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  items: PropTypes.array,
  renderItem: PropTypes.any,
  sectionName: Section.propTypes.sectionName,
  value: Section.propTypes.value,
};

export default Component;
