import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import tags from '../../../../.storybook/fake_data/tags.json';

import ItemListHeader from '../itemListHeader';

const literals = {
  search: allLiterals.search,
};

storiesOf('3. Organisms|ItemList.Header', module).add('default', () => (
  <ItemListHeader
    literals={literals}
    tags={tags}
    searchValue="Search Value"
    handleChange={action('Input detected')}
    handleClick={action('IconButton clicked')}
  />
));
