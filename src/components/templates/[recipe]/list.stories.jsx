import React from 'react';
import PropTypes from 'prop-types';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import literals from '../../../../.storybook/fake_data/literals.json';
import recipes from '../../../../.storybook/fake_data/recipes.json';
import recipes8 from '../../../../.storybook/fake_data/recipes8.json';

import RecipeListItem from '../../organisms/[recipe]/list/item';

import recipeImage from '../../../../public/fake_imgs/recipe.jpg';

import Component from './list';

const defaultRecipes = recipes.map((recipe) => ({
  ...recipe,
  image: {
    src: recipeImage,
    width: 1080,
    height: 1440,
  },
}));

const lazyLoadingRecipes = recipes8.map(
  /*
  Generate different urls for the same image
  to trick the browser to download it again for every recipe
  and be able to test Image Lazy Loading with manual scrolling
  */
  (recipe, index) => ({
    ...recipe,
    image: {
      src: `${recipeImage}?${index}`,
      width: 1080,
      height: 1440,
    },
  }),
);

const StoryComponent = ({ itemList }) => {
  const getLiterals = ({ difficulty, preparationTime, howManyIngredients, participants }) => ({
    difficulty,
    preparationTime,
    howManyIngredients,
    participants,
    about: 'About',
  });

  return (
    <Component
      literals={getLiterals(literals)}
      search={literals.comingSoon}
      itemList={itemList}
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
  );
};

StoryComponent.propTypes = {
  itemList: PropTypes.arrayOf(RecipeListItem.propTypes.data).isRequired,
};

storiesOf('Templates/[Recipe]/List', module)
  .addDecorator(StoryRouter())
  .add('default', () => <StoryComponent itemList={defaultRecipes} />)
  .add('Lazy Loading Test', () => <StoryComponent itemList={lazyLoadingRecipes} />);
