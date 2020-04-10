import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../public/storybook_fake_data/literals.json';
import ItemListToolbar from '../itemListToolbar';

const literals = {
  search: allLiterals.search,
};

storiesOf('2. Molecules|ItemList.Toolbar', module).add('default', () => (
  <ItemListToolbar
    literals={literals}
    searchValue="Search Value"
    handleChange={action('Input detected')}
    handleClick={action('IconButton clicked')}
  />
));
