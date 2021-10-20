import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import items from '../../../../../.storybook/fake_data/items.json';

import Component from './imageFooter';

const details = items[0];
const data = {
  likeCount: details.likeCount,
  name: details.name,
  price: details.price,
};

storiesOf('Molecules/_Room_/List/ImageFooter', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => <Component data={data} />);
