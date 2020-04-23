import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import authorData from '../../../../.storybook/fake_data/author.json';
import projectData from '../../../../.storybook/fake_data/project.json';
import tags from '../../../../.storybook/fake_data/tags.json';
import items from '../../../../.storybook/fake_data/items.json';
import ItemListTemplate from '../itemListTemplate';

const literals = {
  search: allLiterals.search,
};

storiesOf('Templates/ItemList', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ItemListTemplate
      literals={literals}
      authorData={authorData}
      projectData={projectData}
      search="Search Value"
      itemList={items}
      tags={tags}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));
