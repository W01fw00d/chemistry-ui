import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Component from './checkbox';

storiesOf('Atoms/Fields/Checkbox', module)
  .addDecorator(themeDecorator(theme))
  .add('checked', () => (
    <Component id="checkbox" value handleChange={action('Input detected')} />
  ))
  .add('unchecked', () => (
    <Component id="checkbox" value={false} handleChange={action('Input detected')} />
  ));
