import React from 'react';

import { storiesOf } from '@storybook/react';

import items from '../../../../.storybook/fake_data/items.json';
import ProductImageFooter from '../productImageFooter';

const details = items[0];
const data = {
  name: details.name,
  price: details.price,
  likeCount: details.likeCount,
};

storiesOf('2. Molecules|ItemList.ProductImageFooter', module).add('default', () => (
  <ProductImageFooter data={data} />
));
