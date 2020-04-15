import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import roomsData from '../../../../.storybook/fake_data/rooms.json';

import ItemListProduct from '../itemListProduct';

const room = roomsData[0];
const data = {
  image: room.image,
  name: room.name,
  price: room.price,
  likeCount: room.likeCount,
};

storiesOf('3. Organisms|ItemList.Product', module)
  .addDecorator(StoryRouter())
  .add('default', () => <ItemListProduct data={data} />);
