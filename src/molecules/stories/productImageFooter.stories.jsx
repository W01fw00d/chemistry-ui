import React from 'react';

import { storiesOf } from '@storybook/react';

import rooms from '../../../public/storybook_fake_data/rooms.json';
import ProductImageFooter from '../productImageFooter';

const details = rooms[0];
const data = {
  name: details.name,
  price: details.price,
  likeCount: details.likeCount,
};

storiesOf('2. Molecules|ItemList.ProductImageFooter', module).add('default', () => (
  <ProductImageFooter data={data} />
));
