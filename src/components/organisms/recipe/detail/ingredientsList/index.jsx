import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../list/index.jsx';

import Section from './components/section.jsx';
import Item from './components/item.jsx';

const Component = ({ noItemsMsg, className, ingredients }) => (
  <List
    className={className}
    items={ingredients}
    noItemsMsg={noItemsMsg}
    Section={props => <Section {...props} />}
    // eslint-disable-next-line react/prop-types
    Item={(props) => <Item {...props} item={null} {...props.item} />}
  />
);

Component.defaultProps = {
  noItemsMsg: '',
  className: '',
  ingredients: [],
};

Component.propTypes = {
  noItemsMsg: PropTypes.string,
  className: PropTypes.string,
  ingredients: PropTypes.array,
};

export default Component;
