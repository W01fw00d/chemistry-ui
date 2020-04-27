import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import itemData from '../../../../.storybook/fake_data/items.json';

import itemImage from '../../../../public/fake_imgs/item.jpg';

import ItemListProduct from '../itemListProduct';

const item = itemData[0];
const data = {
  image: itemImage,
  name: item.name,
  price: item.price,
  likeCount: item.likeCount,
};

storiesOf('Organisms/Item/List/Product', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => <ItemListProduct data={data} />);
