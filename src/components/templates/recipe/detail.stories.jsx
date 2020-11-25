import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allData from '../../../../.storybook/fake_data/recipes.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpeg';

import Component from './detail';

const getData = ({ name, ingredients }) => ({
  name,
  ingredients,
  image: recipeImage,
  steps: [
    {
      id: 1,
      sectionName: 'Section Name 1',
      description: 'Description',
      items: ['Item 1', 'Item 2'],
    },
    {
      id: 1,
      sectionName: 'Section Name 2',
      description: 'Description',
    },
  ],
});

storiesOf('Templates/[Recipe]/Detail', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component data={getData(allData[0])} handleClick={action('Button clicked')} />
  ));
