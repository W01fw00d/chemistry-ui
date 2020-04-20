import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import IconButton from '../iconButton';

storiesOf('1. Atoms|Buttons.IconButton', module)
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <IconButton handleClick={action('IconButton clicked')}>
      <ArrowBackIcon />
    </IconButton>
  ));
