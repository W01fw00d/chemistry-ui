import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import literals from '../../../../.storybook/fake_data/literals.json';
import allData from '../../../../.storybook/fake_data/recipes.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpeg';

import RecipeDetailTemplate from '../recipeDetailTemplate';

const getLiterals = ({ ingredients }) => ({
  ingredients,
});

const getData = ({ name, ingredients }) => ({
  name,
  ingredients,
  image: recipeImage,
});

storiesOf('Templates/Recipe/Detail', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <RecipeDetailTemplate
      literals={getLiterals(literals)}
      data={getData(allData[0])}
      handleClick={action('Button clicked')}
    />
  ));
