import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import items from '../../../../.storybook/fake_data/items.json';

import RecipeListImageFooter from '../recipeListImageFooter';

const details = items[0];
const data = {
  name: details.name,
  price: details.price,
  likeCount: details.likeCount,
};

storiesOf('Molecules/Recipe/List/ImageFooter', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => <RecipeListImageFooter data={data} />);
