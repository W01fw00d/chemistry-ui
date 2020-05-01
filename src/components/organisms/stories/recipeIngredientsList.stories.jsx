import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import recipes from '../../../../.storybook/fake_data/recipes.json';

import RecipeIngredientsList from '../recipeIngredientsList.jsx';

storiesOf('Organisms/Recipe/Detail/IngredientsList', module)
  .addDecorator(themeDecorator(theme))
  .add('without alternatives', () => <RecipeIngredientsList ingredients={recipes[0].ingredients} />)
  .add('with alternatives', () => <RecipeIngredientsList ingredients={recipes[1].ingredients} />)
  .add('without ingredients', () => <RecipeIngredientsList />);
