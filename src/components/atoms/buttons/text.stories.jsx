import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Component from './text';

storiesOf('Atoms/Buttons/Text', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component handleClick={action('TextButton clicked')}>Text Button</Component>
  ));
