import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  ListItem as Item,
  ListItemText as Text,
} from '@material-ui/core';

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
  value, handleClick
}) => {
  return (
    <Section
      sectionName={sectionName &&
        <MarkdownText id={`${index}-${rowCounter}-subheader`} text={sectionName} />
      }
      description={description && (
        <Item role={undefined} dense>
          <Text
            primary={<MarkdownText id={`${index}-${rowCounter}-description`} text={description} />}
          />
        </Item>
      )}
      items={items} className={className} renderItem={renderItem} value={value} handleClick={handleClick}
    />
  );
};

Component.defaultProps = {
  renderItem: () => { },
};

Component.propTypes = {
  index: PropTypes.number,
  rowCounter: PropTypes.number,
  sectionName: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  renderItem: PropTypes.any,
};

export default Component;
