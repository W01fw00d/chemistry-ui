import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import recipes from '../../../../.storybook/fake_data/recipes.json';
import literals from '../../../../.storybook/fake_data/literals.json';

import RecipeListImageFooter from '../recipeListImageFooter';

const getLiterals = ({ difficulty, preparationTime, howManyIngredients }) => ({
  difficulty,
  preparationTime,
  howManyIngredients,
});

const details = recipes[0];
const data = {
  difficulty: details.difficulty,
  preparationTime: details.preparationTime,
  nIngredients: details.nIngredients,
};

storiesOf('Molecules/Recipe/List/ImageFooter', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => <RecipeListImageFooter literals={getLiterals(literals)} data={data} />);
