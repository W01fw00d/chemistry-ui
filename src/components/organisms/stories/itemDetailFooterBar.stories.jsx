import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import data from '../../../../.storybook/fake_data/items.json';

import ItemDetailFooterBar from '../itemDetailFooterBar';

const footerBarLiterals = {
  buy: allLiterals.buy,
};

const details = data[0];
const footerBarData = {
  price: details.price,
  isGroupPrice: details.isGroupPrice,
};

storiesOf('3. Organisms|ItemDetail.Footer', module).add('default', () => (
  <ItemDetailFooterBar
    literals={footerBarLiterals}
    data={footerBarData}
    handleClick={action('Button clicked')}
  />
));
