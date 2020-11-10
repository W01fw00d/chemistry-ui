import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import allLiterals from '../../../../../.storybook/fake_data/literals.json';

import Component from './buttonsRow';

const literals = {
  like: allLiterals.like,
  comment: allLiterals.comment,
};

storiesOf('Organisms/[Item]/Detail/ButtonsRow', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component
      literals={literals}
      likeCount={3}
      handleClick={action('IconButton clicked')}
    />
  ));
