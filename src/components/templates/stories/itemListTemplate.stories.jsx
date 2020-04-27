import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import tags from '../../../../.storybook/fake_data/tags.json';
import items from '../../../../.storybook/fake_data/items.json';
import ItemListTemplate from '../itemListTemplate';

import itemImage from '../../../../public/fake_imgs/item.jpg';

const formattedItems = items.map(item => {
  item.image = itemImage;
  return item;
});

const literals = {
  search: allLiterals.search,
};

storiesOf('Templates/Item/List', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ItemListTemplate
      literals={literals}
      authorData={{
        name: 'Gabriel Romay Machado',
        email: 'romay.gabriel@gmail.com',
        url: 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114/?locale=en_US',
      }}
      projectData={{
        url: 'https://github.com/W01fw00d/chemistry-ui/blob/master/README.md',
      }}
      search="Search Value"
      itemList={formattedItems}
      tags={tags}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));
