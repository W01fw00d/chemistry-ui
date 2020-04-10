import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextField from '../textField';

storiesOf('1. Atoms|Fields.Text', module).add('default', () => (
  <TextField id="textField" label="Write here" value="" handleChange={action('Input detected')} />
));
