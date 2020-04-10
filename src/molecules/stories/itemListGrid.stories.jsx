import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import roomsData from '../../../public/storybook_fake_data/rooms.json';
import ItemListProduct from '../../organisms/itemListProduct';

import ItemListGrid from '../itemListGrid';

const getItemData = room => ({
  image: room.image,
  name: room.name,
  price: room.price,
  likeCount: room.likeCount,
});

const data = [
  { ...getItemData(roomsData[0]), id: '1' },
  { ...getItemData(roomsData[1]), id: '2' },
  { ...getItemData(roomsData[2]), id: '3' },
];

storiesOf('2. Molecules|ItemList.Grid', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ItemListGrid>
      {data.map(item => (
        <ItemListProduct key={item.id} data={item} />
      ))}
    </ItemListGrid>
  ));
