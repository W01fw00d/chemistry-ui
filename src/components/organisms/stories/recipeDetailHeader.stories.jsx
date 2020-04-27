import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import RecipeDetailAppBar from '../recipeDetailHeader';

storiesOf('Organisms/Recipe/Detail/Header', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => <RecipeDetailAppBar name="Item Name" />);
