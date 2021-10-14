import React from 'react';
import PropTypes from 'prop-types';

import MarkdownText from '../../../../../atoms/markdownText.jsx';

import Section from '../../../../list/section.jsx';

const Component = ({
  index,
  rowCounter,
  sectionName,
  description,
  items,
  className,
  renderItem,
  value,
  handleClick,
}) => (
  <Section
    sectionName={
      sectionName && <MarkdownText id={`${index}-${rowCounter}-subheader`} text={sectionName} />
    }
    description={
      description && <MarkdownText id={`${index}-${rowCounter}-description`} text={description} />
    }
    items={items}
    className={className}
    renderItem={renderItem}
    value={value}
    handleClick={handleClick}
  />
);

Component.defaultProps = {
  sectionName: null,
  description: null,
  items: [],
  className: '',
  renderItem: () => {},
  handleClick: () => {},
};

Component.propTypes = {
  index: PropTypes.number.isRequired,
  rowCounter: PropTypes.number.isRequired,
  sectionName: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
  value: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
};

export default Component;
