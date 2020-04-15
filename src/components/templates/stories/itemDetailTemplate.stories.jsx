import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core';

import theme from '../../../styles/global-styles';
import allLiterals from '../../../../.storybook/fake_data/literals.json';
import allData from '../../../../.storybook/fake_data/items.json';

import ItemDetailTemplate from '../itemDetailTemplate';

const literals = {
  like: allLiterals.like,
  comment: allLiterals.comment,
  description: allLiterals.description,
  buy: allLiterals.buy,
};

const details = allData[0];
const data = {
  image: details.image,
  price: details.price,
  isGroupPrice: details.isGroupPrice,
};

const getThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

storiesOf('4. Templates|ItemDetail', module)
  .addDecorator(StoryRouter())
  .addDecorator(getThemeProviderDecorator)
  .add('default', () => (
    <ItemDetailTemplate literals={literals} data={data} handleClick={action('Button clicked')} />
  ));
