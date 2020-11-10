import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import literals from '../../../../.storybook/fake_data/literals.json';
import project from '../../../../.storybook/fake_data/project.json';
import recipes from '../../../../.storybook/fake_data/recipes.json';

import recipeImage from '../../../../public/fake_imgs/recipe.jpeg';

import RecipeListTemplate from './list';

const getLiterals = ({ difficulty, preparationTime, howManyIngredients, participants }) => ({
  difficulty,
  preparationTime,
  howManyIngredients,
  participants,
});

const formattedRecipes = recipes.map(recipe => ({ ...recipe, image: recipeImage }));

storiesOf('Templates/[Recipe]/List', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <RecipeListTemplate
      literals={getLiterals(literals)}
      authorData={{
        name: literals.gabriel,
        email: 'romay.gabriel@gmail.com',
        url: literals.cv,
      }}
      projectData={{
        description: project.description,
        url: 'https://github.com/W01fw00d/chemistry-ui/blob/master/README.md',
        participants: project.participants,
      }}
      search={literals.comingSoon}
      itemList={formattedRecipes}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));
