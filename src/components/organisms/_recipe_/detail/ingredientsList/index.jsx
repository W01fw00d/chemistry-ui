import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../list/index';

import Section from './components/section';
import Item from './components/item';

const Component = ({ className, ingredients, noItemsMsg }) => (
  <List
    className={className}
    // eslint-disable-next-line react/prop-types
    Item={(props) => <Item {...props} item={null} {...props.item} />}
    items={ingredients}
    noItemsMsg={noItemsMsg}
    Section={(props) => <Section {...props} />}
  />
);

Component.defaultProps = {
  className: '',
  ingredients: [],
  noItemsMsg: '',
};

Component.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.array,
  noItemsMsg: PropTypes.string,
};

export default Component;
