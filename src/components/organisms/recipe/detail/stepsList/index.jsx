import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../list/index.jsx';

import Section from './components/section.jsx';
import Item from './components/item.jsx';

const Component = ({ className, steps }) => (
  <List
    className={className}
    items={steps}
    noItemsMsg='No steps required'
    Section={(props) => <Section {...props} />}
    Item={(props) => <Item {...props} />}
  />
);

Component.defaultProps = {
  className: '',
  steps: [],
};

Component.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
};

export default Component;
