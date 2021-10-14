import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import theme from '../../../../styles/global-styles';

import allLiterals from '../../../../../.storybook/fake_data/literals.json';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';

import Component from './toolbar';

storiesOf('Molecules/[Recipe]/List/Toolbar', module)
  .addDecorator(themeDecorator(theme))
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      aboutLiteral="About"
      searchValue="Search Value"
      handleChange={action('Input detected')}
      languageData={{
        active: 0,
        options: [
          { id: 0, text: 'Option 1' },
          { id: 1, text: 'Option 2' },
        ],
        onChange: action('Select click detected'),
      }}
      literals={allLiterals}
    />
  ))
  .add('without language select', () => (
    <Component
      aboutLiteral="About"
      searchValue="Search Value"
      handleChange={action('Input detected')}
      languageData={null}
      literals={allLiterals}
    />
  ));
