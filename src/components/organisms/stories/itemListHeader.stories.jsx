import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import allLiterals from '../../../../.storybook/fake_data/literals.json';
import tags from '../../../../.storybook/fake_data/tags.json';

import ItemListHeader from '../itemListHeader';

const literals = {
  search: allLiterals.search,
};

storiesOf('Organisms/ItemList/Header', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemListHeader
      literals={literals}
      authorData={}
      projectData={}
      tags={tags}
      searchValue="Search Value"
      handleChange={action('Input detected')}
      handleClick={action('IconButton clicked')}
    />
  ));
