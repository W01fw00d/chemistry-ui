import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import literals from '../../../../.storybook/fake_data/literals.json';
import recipes from '../../../../.storybook/fake_data/recipes.json';
import recipes8 from '../../../../.storybook/fake_data/recipes8.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpg';

import Component from './list';

const getLiterals = ({ difficulty, preparationTime, howManyIngredients, participants }) => ({
  difficulty,
  preparationTime,
  howManyIngredients,
  participants,
  about: 'About',
});

const formattedRecipes = recipes.map(recipe => ({ ...recipe, image: recipeImage }));

const lazyLoadingRecipes = recipes8.map(
  /*
  Generate different urls for the same image
  to trick the browser to download it again for every recipe
  and be able to test Image Lazy Loading with manual scrolling
  */
  (recipe, index) => ({ ...recipe, image: `${recipeImage}?${index}`})
);

storiesOf('Templates/[Recipe]/List', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      literals={getLiterals(literals)}
      search={literals.comingSoon}
      itemList={formattedRecipes}
      languageData={{
        active: 0,
        options: [
          { id: 0, text: 'Option 1' },
          { id: 1, text: 'Option 2' },
        ],
        onChange: action('Select click detected'),
      }}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ))
  .add('Lazy Loading Test', () => (
    <Component
      literals={getLiterals(literals)}
      search={literals.comingSoon}
      itemList={lazyLoadingRecipes}
      languageData={{
        active: 0,
        options: [
          { id: 0, text: 'Option 1' },
          { id: 1, text: 'Option 2' },
        ],
        onChange: action('Select click detected'),
      }}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));
