import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';

import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import recipes from '../../../../../.storybook/fake_data/recipes.json';
import literals from '../../../../../.storybook/fake_data/literals.json';

import Component from './imageFooter';

const getLiterals = ({ difficulty, howManyIngredients, preparationTime }) => ({
  difficulty,
  howManyIngredients,
  preparationTime,
});
const getData = ({ difficulty, eventDate, name, nIngredients, preparationTime, showName }) => ({
  difficulty,
  eventDate,
  name,
  nIngredients,
  preparationTime,
  showName,
});

storiesOf('Molecules/_Recipe_/List/ImageFooter', module)
  .addDecorator(themeDecorator(theme))
  .add('without name', () => (
    <Component data={getData(recipes[0])} literals={getLiterals(literals)} />
  ))
  .add('with name', () => (
    <Component data={getData(recipes[1])} literals={getLiterals(literals)} />
  ));
