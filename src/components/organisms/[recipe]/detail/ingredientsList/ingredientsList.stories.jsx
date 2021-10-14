import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../../../styles/global-styles';
import themeDecorator from '../../../../../../.storybook/decorators/themeDecorator';

import recipes from '../../../../../../.storybook/fake_data/recipes.json';

import Component from '.';

storiesOf('Organisms/[Recipe]/Detail/IngredientsList', module)
  .addDecorator(themeDecorator(theme))
  .add('without alternatives', () => <Component ingredients={recipes[0].ingredients} />)
  .add('with alternatives', () => <Component ingredients={recipes[1].ingredients} />)
  .add('with sections', () => <Component ingredients={recipes[2].ingredients} />)
  .add('with emoji', () => <Component ingredients={recipes[3].ingredients} />)
  .add('without ingredients', () => <Component noItemsMsg="No ingredients required" />);
