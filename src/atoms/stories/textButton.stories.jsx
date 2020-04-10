import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextButton from '../textButton';

storiesOf('1. Atoms|Buttons.TextButton', module).add('default', () => (
  <TextButton handleClick={action('TextButton clicked')}>Text Button</TextButton>
));
