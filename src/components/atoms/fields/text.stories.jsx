import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Component from './text';

storiesOf('Atoms/Fields/Text', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component id="textField" value="Write here" handleChange={action('Input detected')} />
  ));
