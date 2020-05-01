import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import recipes from '../../../../.storybook/fake_data/recipes.json';
import literals from '../../../../.storybook/fake_data/literals.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpeg';

import RecipeListItem from '../recipeListItem';

const getLiterals = ({ difficulty, preparationTime, howManyIngredients }) => ({
  difficulty,
  preparationTime,
  howManyIngredients,
});
const getData = ({ id, name, difficulty, preparationTime, nIngredients, showName }) => ({
  id,
  name,
  difficulty,
  preparationTime,
  nIngredients,
  image: recipeImage,
  showName,
});

storiesOf('Organisms/Recipe/List/Item', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('without name', () => (
    <RecipeListItem literals={getLiterals(literals)} data={getData(recipes[0])} />
  ))
  .add('with name', () => (
    <RecipeListItem literals={getLiterals(literals)} data={getData(recipes[1])} />
  ));
