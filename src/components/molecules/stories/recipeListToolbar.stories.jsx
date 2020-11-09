import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import authorData from '../../../../.storybook/fake_data/author.json';
import projectData from '../../../../.storybook/fake_data/project.json';

import escapingBoredomTitleLogo from '../../../../public/escaping-boredom-title-logo.png';

import RecipeListToolbar from '../recipeListToolbar';

storiesOf('Molecules/Recipe/List/Toolbar', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <RecipeListToolbar
      authorData={authorData}
      projectData={projectData}
      logo={escapingBoredomTitleLogo}
      searchValue="Search Value"
      handleChange={action('Input detected')}
      literals={allLiterals}
    />
  ));
