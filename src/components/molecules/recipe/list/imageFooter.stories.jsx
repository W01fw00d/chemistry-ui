import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';

import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import recipes from '../../../../../.storybook/fake_data/recipes.json';
import literals from '../../../../../.storybook/fake_data/literals.json';

import RecipeListImageFooter from './imageFooter';

const getLiterals = ({ difficulty, preparationTime, howManyIngredients }) => ({
  difficulty,
  preparationTime,
  howManyIngredients,
});
const getData = ({ name, eventDate, difficulty, preparationTime, nIngredients, showName }) => ({
  name,
  eventDate,
  difficulty,
  preparationTime,
  nIngredients,
  showName,
});

storiesOf('Molecules/[Recipe]/List/ImageFooter', module)
  .addDecorator(themeDecorator(theme))
  .add('without name', () => (
    <RecipeListImageFooter literals={getLiterals(literals)} data={getData(recipes[0])} />
  ))
  .add('with name', () => (
    <RecipeListImageFooter literals={getLiterals(literals)} data={getData(recipes[1])} />
  ));
