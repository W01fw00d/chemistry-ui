import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import allData from '../../../../.storybook/fake_data/recipes.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpeg';

import RecipeDetailTemplate from '../recipeDetailTemplate';

const literals = {
  like: allLiterals.like,
  comment: allLiterals.comment,
  description: allLiterals.description,
  buy: allLiterals.buy,
};

const details = allData[0];
const data = {
  name: details.name,
  image: recipeImage,
};

storiesOf('Templates/Recipe/Detail', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <RecipeDetailTemplate literals={literals} data={data} handleClick={action('Button clicked')} />
  ));
