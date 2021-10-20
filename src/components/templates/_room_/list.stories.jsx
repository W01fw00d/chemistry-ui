import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import tags from '../../../../.storybook/fake_data/tags.json';
import items from '../../../../.storybook/fake_data/items.json';
import Component from './list';

import itemImage from '../../../../public/fake_imgs/item.jpg';

const formattedItems = items.map((item) => ({
  ...item,
  image: {
    height: 360,
    src: itemImage,
    width: 640,
  },
}));

storiesOf('Templates/_Room_/List', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      authorData={{
        email: 'romay.gabriel@gmail.com',
        name: 'Gabriel Romay Machado',
        url: 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114/?locale=en_US',
      }}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
      itemList={formattedItems}
      projectData={{
        name: 'Escaping Boredom',
        url: 'https://github.com/W01fw00d/chemistry-ui/blob/master/README.md',
      }}
      search="Search Value"
      tags={tags}
    />
  ));
