import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import recipes from '../../../../../.storybook/fake_data/recipes.json';
import literals from '../../../../../.storybook/fake_data/literals.json';

import recipeImage from '../../../../../public/fake_imgs/recipe.jpg';

import Component from './item';

const getLiterals = ({ difficulty, howManyIngredients, preparationTime }) => ({
  difficulty,
  howManyIngredients,
  preparationTime,
});
const getData = ({ difficulty, eventDate, id, name, nIngredients, preparationTime, showName }) => ({
  difficulty,
  eventDate,
  id,
  image: {
    height: 1440,
    src: recipeImage,
    width: 1080,
  },
  name,
  nIngredients,
  preparationTime,
  showName,
});

storiesOf('Organisms/[Recipe]/List/Item', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('without name', () => (
    <Component data={getData(recipes[0])} literals={getLiterals(literals)} />
  ))
  .add('with name', () => <Component data={getData(recipes[1])} literals={getLiterals(literals)} />)
  .add('without image', () => (
    <Component
      data={{
        ...getData(recipes[0]),
        image: null,
      }}
      literals={getLiterals(literals)}
    />
  ));
