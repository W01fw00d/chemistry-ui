import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import itemData from '../../../../../.storybook/fake_data/items.json';

import itemImage from '../../../../../public/fake_imgs/item.jpg';

import Component from './product';

const getData = ({ id, name, price, likeCount, isEditorsChoice }) => ({
  id,
  name,
  price,
  likeCount,
  isEditorsChoice,
  image: {
    src: itemImage,
    width: 640,
    height: 360,
  },
});

storiesOf('Organisms/[Item]/List/Product', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => <Component data={getData(itemData[0])} />);
