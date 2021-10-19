import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import allData from '../../../../.storybook/fake_data/items.json';

import itemImage from '../../../../public/fake_imgs/item.jpg';

import Component from './detail';

const literals = {
  buy: allLiterals.buy,
  comment: allLiterals.comment,
  description: allLiterals.description,
  like: allLiterals.like,
};

const details = allData[0];
const data = {
  image: {
    height: 360,
    src: itemImage,
    width: 640,
  },
  isGroupPrice: details.isGroupPrice,
  name: 'Item Name',
  price: details.price,
};

storiesOf('Templates/[Room]/Detail', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component data={data} handleClick={action('Button clicked')} literals={literals} />
  ));
