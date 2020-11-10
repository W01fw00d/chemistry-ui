import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import allLiterals from '../../../../../.storybook/fake_data/literals.json';
import data from '../../../../../.storybook/fake_data/items.json';

import ItemDetailFooterBar from './footerBar';

const footerBarLiterals = {
  buy: allLiterals.buy,
};

const details = data[0];
const footerBarData = {
  price: details.price,
  isGroupPrice: details.isGroupPrice,
};

storiesOf('Organisms/[Item]/Detail/Footer', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemDetailFooterBar
      literals={footerBarLiterals}
      data={footerBarData}
      handleClick={action('Button clicked')}
    />
  ));
