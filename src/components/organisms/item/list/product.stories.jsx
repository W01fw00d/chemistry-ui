import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import itemData from '../../../../../.storybook/fake_data/items.json';

import itemImage from '../../../../../public/fake_imgs/item.jpg';

import ItemListProduct from './product';

const getData = ({ id, name, price, likeCount, isEditorsChoice }) => ({
  id,
  name,
  price,
  likeCount,
  isEditorsChoice,
  image: itemImage,
});

storiesOf('Organisms/[Item]/List/Product', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => <ItemListProduct data={getData(itemData[0])} />);
