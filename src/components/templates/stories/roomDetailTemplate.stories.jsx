import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core';

import theme from '../../../styles/global-styles';
import allLiterals from '../../../../.storybook/fake_data/literals.json';
import allData from '../../../../.storybook/fake_data/rooms.json';

import RoomDetailTemplate from '../roomDetailTemplate';

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

storiesOf('4. Templates|RoomDetail', module)
  .addDecorator(StoryRouter())
  .addDecorator(getThemeProviderDecorator)
  .add('default', () => (
    <RoomDetailTemplate literals={literals} data={data} handleClick={action('Button clicked')} />
  ));
