import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import allLiterals from '../../../../../.storybook/fake_data/literals.json';

import Component from './buttonsRow';

const literals = {
  comment: allLiterals.comment,
  like: allLiterals.like,
};

storiesOf('Organisms/_Room_/Detail/ButtonsRow', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component handleClick={action('IconButton clicked')} likeCount={3} literals={literals} />
  ));
