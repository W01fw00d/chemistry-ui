import React from 'react';
import PropTypes from 'prop-types';

import MarkdownText from '../../../../../atoms/markdownText.jsx';

import Section from '../../../../list/section.jsx';

const Component = ({
  className,
  description,
  handleClick,
  index,
  items,
  renderItem,
  rowCounter,
  sectionName,
  value,
}) => (
  <Section
    className={className}
    description={
      description && <MarkdownText id={`${index}-${rowCounter}-description`} text={description} />
    }
    handleClick={handleClick}
    items={items}
    renderItem={renderItem}
    sectionName={
      sectionName && <MarkdownText id={`${index}-${rowCounter}-subheader`} text={sectionName} />
    }
    value={value}
  />
);

Component.defaultProps = {
  className: '',
  description: null,
  handleClick: () => {},
  items: [],
  renderItem: () => {},
  sectionName: null,
};

Component.propTypes = {
  className: Section.propTypes.className,
  description: MarkdownText.propTypes.text,
  handleClick: Section.propTypes.handleClick,
  index: PropTypes.number.isRequired,
  items: Section.propTypes.items,
  renderItem: Section.propTypes.renderItem,
  rowCounter: PropTypes.number.isRequired,
  sectionName: MarkdownText.propTypes.text,
  value: Section.propTypes.value.isRequired,
};

export default Component;
