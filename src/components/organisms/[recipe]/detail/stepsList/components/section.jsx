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
  sectionName: MarkdownText.propTypes.text,
  description: MarkdownText.propTypes.text,
  items: Section.propTypes.items,
  className: Section.propTypes.className,
  renderItem: Section.propTypes.renderItem,
  value: Section.propTypes.value.isRequired,
  handleClick: Section.propTypes.handleClick,
};

export default Component;
