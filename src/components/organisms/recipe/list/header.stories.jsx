import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../../styles/global-styles';

import allLiterals from '../../../../../.storybook/fake_data/literals.json';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';

import Component from './header';

storiesOf('Organisms/[Recipe]/List/Header', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component
      searchValue="Search Value"
      handleChange={action('Input detected')}
      handleClick={action('IconButton clicked')}
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
  ));
