import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core';

import theme from '../../../styles/global-styles';
import allLiterals from '../../../../.storybook/fake_data/literals.json';
import tags from '../../../../.storybook/fake_data/tags.json';
import items from '../../../../.storybook/fake_data/items.json';
import ItemListTemplate from '../itemListTemplate';

const literals = {
  search: allLiterals.search,
};

const getThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

storiesOf('4. Templates|ItemList', module)
  .addDecorator(StoryRouter())
  .addDecorator(getThemeProviderDecorator)
  .add('default', () => (
    <ItemListTemplate
      literals={literals}
      search="Search Value"
      itemList={items}
      tags={tags}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));
