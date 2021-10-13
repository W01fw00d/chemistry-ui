import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allData from '../../../../.storybook/fake_data/recipes.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpg';

import Component from './detail';

const getData = ({ name, ingredients }) => ({
  name,
  ingredients,
  image: {
    src: recipeImage,
    width: 1080,
    height: 1440,
  },
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

const defaultData = getData(allData[0]);
const noImageData = {...defaultData, image: null}

const literals = {
  image: 'Image',
  ingredients: 'Ingredients',
  steps: 'Steps',
};

storiesOf('Templates/[Recipe]/Detail', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      literals={literals}
      data={defaultData}
      handleClick={action('Button clicked')}
    />
  ))
  .add('without image tab', () => (
    <Component
      literals={literals}
      data={noImageData}
      handleClick={action('Button clicked')}
    />
  ));
