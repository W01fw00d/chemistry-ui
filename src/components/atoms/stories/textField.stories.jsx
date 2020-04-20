import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import TextField from '../textField';

storiesOf('Atoms/Fields/Text', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <TextField id="textField" label="Write here" value="" handleChange={action('Input detected')} />
  ));
