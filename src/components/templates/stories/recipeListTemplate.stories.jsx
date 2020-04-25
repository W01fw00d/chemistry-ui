import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import tags from '../../../../.storybook/fake_data/tags.json';
import recipes from '../../../../.storybook/fake_data/recipes.json';
import RecipeListTemplate from '../recipeListTemplate';

const literals = {
  search: allLiterals.search,
};

storiesOf('Templates/RecipeList', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <RecipeListTemplate
      literals={literals}
      authorData={{
        name: 'Gabriel Romay Machado',
        email: 'romay.gabriel@gmail.com',
        url: 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114/?locale=en_US',
      }}
      projectData={{
        description:
          'While quarentined, a group of friends attempt to learn how to cook under the expert guidance of the Great Chef Mateu...',
        url: 'https://github.com/W01fw00d/chemistry-ui/blob/master/README.md',
      }}
      search="Coming soon!"
      itemList={recipes}
      tags={tags}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));
