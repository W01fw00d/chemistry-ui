import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import theme from '../../../../styles/global-styles';

import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';

import Component from './header';

storiesOf('Organisms/_Recipe_/List/Header', module)
  .addDecorator(themeDecorator(theme))
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      aboutLiteral="About"
      handleChange={action('Input detected')}
      handleClick={action('IconButton clicked')}
      languageData={{
        active: 0,
        onChange: action('Select click detected'),
        options: [
          { id: 0, text: 'Option 1' },
          { id: 1, text: 'Option 2' },
        ],
      }}
      searchValue="Search Value"
    />
  ));
