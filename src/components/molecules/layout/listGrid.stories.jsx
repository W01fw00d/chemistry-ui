import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import itemsData from '../../../../.storybook/fake_data/items.json';

import itemImage from '../../../../public/fake_imgs/item.jpg';

import ItemListProduct from '../../organisms/_room_/list/product';

import ListGrid from './listGrid';

const getItemData = ({ likeCount, name, price }) => ({
  image: {
    height: 360,
    src: itemImage,
    width: 640,
  },
  likeCount,
  name,
  price,
});

const data = [
  { ...getItemData(itemsData[0]), id: 1 },
  { ...getItemData(itemsData[1]), id: 2 },
  { ...getItemData(itemsData[2]), id: 3 },
];

storiesOf('Molecules/Layout/ListGrid', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ListGrid>
      {data.map((item) => (
        <ItemListProduct data={item} key={item.id} />
      ))}
    </ListGrid>
  ));
