import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../list/index.jsx';

import Section from './components/section.jsx';
import Item from './components/item.jsx';

const Component = ({ noItemsMsg, className, steps }) => (
  <List
    className={className}
    items={steps}
    noItemsMsg={noItemsMsg}
    Section={(props) => <Section {...props} />}
    Item={(props) => <Item {...props} />}
  />
);

Component.defaultProps = {
  noItemsMsg: '',
  className: '',
  steps: [],
};

Component.propTypes = {
  noItemsMsg: PropTypes.string,
  className: PropTypes.string,
  steps: PropTypes.array,
};

export default Component;
