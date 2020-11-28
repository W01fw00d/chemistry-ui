import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../../../list/section.jsx';

const Component = ({ sectionName, items, className, renderItem, value, handleClick }) => {
  return (
    <Section
      sectionName={sectionName}
      items={items} className={className} renderItem={renderItem} value={value} handleClick={handleClick}
    />
  );
};

Component.defaultProps = {
  renderItem: () => { },
};

Component.propTypes = {
  sectionName: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
};

export default Component;
