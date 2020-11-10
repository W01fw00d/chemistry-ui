import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Component from './labeledCheckbox.jsx';

storiesOf('Molecules/Fields/LabeledCheckbox', module)
  .addDecorator(themeDecorator(theme))
  .add('checked', () => (
    <Component id="checkbox" value handleChange={action('Input detected')}>
      Labeled Checkbox
    </Component>
  ))
  .add('unchecked', () => (
    <Component id="checkbox" value={false} handleChange={action('Input detected')}>
      Labeled Checkbox
    </Component>
  ));
