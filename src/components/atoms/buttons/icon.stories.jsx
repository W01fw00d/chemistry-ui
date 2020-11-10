import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import Component from './icon';

storiesOf('Atoms/Buttons/Icon', module)
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <Component handleClick={action('IconButton clicked')}>
      <ArrowBackIcon />
    </Component>
  ));
