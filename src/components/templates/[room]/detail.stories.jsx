import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import allData from '../../../../.storybook/fake_data/items.json';

import itemImage from '../../../../public/fake_imgs/item.jpg';

import Component from './detail';

const literals = {
  like: allLiterals.like,
  comment: allLiterals.comment,
  description: allLiterals.description,
  buy: allLiterals.buy,
};

const details = allData[0];
const data = {
  name: 'Item Name',
  image: {
    src: itemImage,
    width: 640,
    height: 360,
  },
  price: details.price,
  isGroupPrice: details.isGroupPrice,
};

storiesOf('Templates/[Room]/Detail', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component literals={literals} data={data} handleClick={action('Button clicked')} />
  ));
