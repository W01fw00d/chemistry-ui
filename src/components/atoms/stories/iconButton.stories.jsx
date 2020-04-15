import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import IconButton from '../iconButton';

storiesOf('1. Atoms|Buttons.IconButton', module).add('ArrowBackIcon', () => (
  <IconButton handleClick={action('IconButton clicked')}>
    <ArrowBackIcon />
  </IconButton>
));
