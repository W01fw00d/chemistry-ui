import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
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
      authorData={{
        name: 'Author Name',
        email: 'fake@email.com',
        url: 'https://fake.io/author-url',
      }}
      projectData={{ logo: '', url: 'https://fake.io/project-url' }}
      search="Search Value"
      itemList={items}
      tags={tags}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));
