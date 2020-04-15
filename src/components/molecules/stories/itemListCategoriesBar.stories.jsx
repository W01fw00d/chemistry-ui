import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import tags from '../../../../.storybook/fake_data/tags.json';

import ItemListCategoriesBar from '../itemListCategoriesBar';

storiesOf('2. Molecules|ItemList.CategoriesBar', module).add('default', () => (
  <ItemListCategoriesBar tags={tags} handleClick={action('IconButton clicked')} />
));
