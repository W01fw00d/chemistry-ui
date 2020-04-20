import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import itemsData from '../../../../.storybook/fake_data/items.json';

import ItemListProduct from '../../organisms/itemListProduct';

import ItemListGrid from '../itemListGrid';

const getItemData = ({ image, name, price, likeCount }) => ({
  image,
  name,
  price,
  likeCount,
});

const data = [
  { ...getItemData(itemsData[0]), id: '1' },
  { ...getItemData(itemsData[1]), id: '2' },
  { ...getItemData(itemsData[2]), id: '3' },
];

storiesOf('2. Molecules|ItemList.Grid', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemListGrid>
      {data.map(item => (
        <ItemListProduct key={item.id} data={item} />
      ))}
    </ItemListGrid>
  ));
