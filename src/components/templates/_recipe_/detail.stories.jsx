import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allData from '../../../../.storybook/fake_data/recipes.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpg';

import Component from './detail';

const getData = ({ ingredients, name }) => ({
  image: {
    height: 1440,
    src: recipeImage,
    width: 1080,
  },
  ingredients,
  name,
  steps: [
    {
      description: 'Description',
      id: 1,
      items: ['Item 1', 'Item 2'],
      sectionName: 'Section Name 1',
    },
    {
      description: 'Description',
      id: 1,
      sectionName: 'Section Name 2',
    },
  ],
});

const defaultData = getData(allData[0]);
const noImageData = { ...defaultData, image: null };

const literals = {
  image: 'Image',
  ingredients: 'Ingredients',
  steps: 'Steps',
};

storiesOf('Templates/_Recipe_/Detail', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component data={defaultData} handleClick={action('Button clicked')} literals={literals} />
  ))
  .add('without image tab', () => (
    <Component data={noImageData} handleClick={action('Button clicked')} literals={literals} />
  ));
