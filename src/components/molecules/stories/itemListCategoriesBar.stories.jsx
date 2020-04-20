import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import tags from '../../../../.storybook/fake_data/tags.json';

import ItemListCategoriesBar from '../itemListCategoriesBar';

storiesOf('Molecules/ItemList/CategoriesBar', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemListCategoriesBar tags={tags} handleClick={action('IconButton clicked')} />
  ));
