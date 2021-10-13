import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import recipes from '../../../../../.storybook/fake_data/recipes.json';
import literals from '../../../../../.storybook/fake_data/literals.json';

import recipeImage from '../../../../../public/fake_imgs/recipe.jpg';

import Component from './item';

const getLiterals = ({ difficulty, preparationTime, howManyIngredients }) => ({
  difficulty,
  preparationTime,
  howManyIngredients,
});
const getData = ({ id, name, eventDate, difficulty, preparationTime, nIngredients, showName }) => ({
  id,
  name,
  eventDate,
  difficulty,
  preparationTime,
  nIngredients,
  image: {
    src: recipeImage,
    width: 1080,
    height: 1440,
  },
  showName,
});

storiesOf('Organisms/[Recipe]/List/Item', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('without name', () => (
    <Component literals={getLiterals(literals)} data={getData(recipes[0])} />
  ))
  .add('with name', () => <Component literals={getLiterals(literals)} data={getData(recipes[1])} />)
  .add('without image', () => (
    <Component
      literals={getLiterals(literals)}
      data={{
        ...getData(recipes[0]),
        image: null,
      }}
    />
  ));
