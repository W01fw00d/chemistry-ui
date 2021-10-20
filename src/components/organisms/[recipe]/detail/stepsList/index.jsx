import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../list/index.jsx';

import Section from './components/section.jsx';
import Item from './components/item.jsx';

const Component = ({ className, noItemsMsg, steps }) => (
  <List
    className={className}
    Item={(props) => <Item {...props} />}
    items={steps}
    noItemsMsg={noItemsMsg}
    Section={(props) => <Section {...props} />}
  />
);

Component.defaultProps = {
  className: '',
  noItemsMsg: '',
  steps: [],
};

Component.propTypes = {
  className: PropTypes.string,
  noItemsMsg: PropTypes.string,
  steps: PropTypes.array,
};

export default Component;
